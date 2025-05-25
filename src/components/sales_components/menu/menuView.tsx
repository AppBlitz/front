import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import { useParams } from "react-router-dom";
import "../css/menu.css";
import Routes_api_java from "../../../routes/Routes_apis_java";

interface ItemMenu {
  recipe: string | null;
  product: string | null;
  categoriItem: string;
}

interface CategoriaMenu {
  id: string;
  name: string;
  description: string;
  date: string;
  items: ItemMenu[];
}

const MenuRestaurante: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Inicializamos useNavigate
  const queryParams = new URLSearchParams(location.search);
  const userRole = queryParams.get("role");


  // Redirigir si no hay role
  useEffect(() => {
    if (!userRole||userRole=="") {
      navigate("/sale/login"); // Redirige a la página de login
    }
  }, [userRole, navigate]);
  const { id_menu } = useParams(); // Obtener el parámetro desde la URL
  const [menuData, setMenuData] = useState<CategoriaMenu | null>(null);

  useEffect(() => {
    if (!id_menu) return; // Asegurar que el menuId está disponible

    fetch(Routes_api_java.url_base+Routes_api_java.get_menu+id_menu) // Reemplaza con la URL correcta de la API
      .then(response => response.json())
      .then(data => setMenuData(data))
      .catch(error => console.error("Error al obtener el menú:", error));
  }, [id_menu]);

  if (!menuData) return <p>No menú...</p>;

  return (
    <div className="menu-container">
      <h1>Menú del Restaurante</h1>
      <div className="categoria">
        <h2>{menuData.name} - {menuData.date}</h2>
        <p><strong>Descripción:</strong> {menuData.description}</p>
        <ul className="lista-items">
          {menuData.items.map((item, index) => (
            <li key={index}>
              <strong>{item.product ?? item.recipe ?? "Sin nombre"}</strong> - Categoría: {item.categoriItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuRestaurante;