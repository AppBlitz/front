import React, { useState, useEffect } from "react";
import TableComponent from "../../generics/table"; // Importa el componente de la tabla
import Button from "../../generics/button";
import Routes_api_java from "../../../routes/Routes_apis_java";
import { useLocation} from "react-router-dom"; 
import GenerateData from "../../../service/generateRoute";
interface MenuData {
  id: string;
  name: string;
  items: {
    recipe: string | null;
    product: string | null;
    categoriItem: string;
  }[];
  description: string;
  date: string;
}

const Tabla_menu: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userRole = queryParams.get("role");
    const token = queryParams.get("token");
    const userId = queryParams.get("id");
  
  const [menus, setMenus] = useState<MenuData[]>([]);
  
  useEffect(() => {
    fetch(Routes_api_java.url_base + Routes_api_java.get_all_menu)
      .then(response => response.json())
      .then(data => setMenus(data)) // Guardar los datos en el estado
      .catch(error => console.error("Error al obtener los menús:", error));
  }, []);

  // Define los nombres de las columnas
  const columnNames = ["ID","Nombre","Fecha","Descripcion", "Accion"];

  // Generar los datos de la tabla a partir del JSON recibido
  const data = menus.map(menu => ({
    id: menu.id,
    nombre: menu.name,
    fecha: menu.date,
    descripcion: menu.description,
    accion: <Button label="Ver" url={"/sales/menu/view"+GenerateData(userRole||"", userId||"", token||"")+"&id_menu="+menu.id} />
  }));

  return (
    <div>
      <h1>Historial de menús</h1>
      <TableComponent columns={columnNames} data={data} />
    </div>
  );
};

export default Tabla_menu;