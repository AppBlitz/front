import React, { useState } from "react";
import "../css/orderManagement.css";
import ActionButton from "../../generics/button_action";

interface OrderItem {
  id: number;
  nombre: string;
  tipo: "producto" | "receta";
}

const OrdersManagement: React.FC = () => {
  const [menuItems, setMenuItems] = useState<OrderItem[]>([]);
  const [productos, setProductos] = useState<OrderItem[]>([
    { id: 1, nombre: "Carne", tipo: "producto" },
    { id: 2, nombre: "Papas", tipo: "producto" },
  ]);
  const [recetas, setRecetas] = useState<OrderItem[]>([
    { id: 3, nombre: "Hamburguesa", tipo: "receta" },
    { id: 4, nombre: "Ensalada", tipo: "receta" },
  ]);
  const [selectedItem, setSelectedItem] = useState<OrderItem | null>(null);

  // Agregar al menú y eliminar de la lista original
  const agregarAlMenu = () => {
    if (selectedItem) {
      setMenuItems([...menuItems, selectedItem]);

      if (selectedItem.tipo === "producto") {
        setProductos(productos.filter((item) => item.id !== selectedItem.id));
      } else {
        setRecetas(recetas.filter((item) => item.id !== selectedItem.id));
      }

      setSelectedItem(null);
    }
  };

  // Eliminar del menú y devolver a la lista original
  const eliminarDelMenu = (id: number) => {
    const item = menuItems.find((element) => element.id === id);
    if (item) {
      if (item.tipo === "producto") {
        setProductos([...productos, item]);
      } else {
        setRecetas([...recetas, item]);
      }
    }
    setMenuItems(menuItems.filter((element) => element.id !== id));
  };

  // Simulación de guardar datos
  const guardarMenu = () => {
    console.log("Menú guardado:", menuItems);
    alert("Menú guardado correctamente.");
  };

  return (
    <div className="orders-container">
      <div className="orders-layout">
        <div className="orders-section">
          <h3>Productos</h3>
          <table className="orders-table">
            <thead>
              <tr><th>ID</th><th>Nombre</th></tr>
            </thead>
            <tbody>
              {productos.map((prod) => (
                <tr key={prod.id} onClick={() => setSelectedItem(prod)} className={selectedItem?.id === prod.id ? "selected-row" : ""}>
                  <td>{prod.id}</td>
                  <td>{prod.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="orders-section">
          <h3>Recetas</h3>
          <table className="orders-table">
            <thead>
              <tr><th>ID</th><th>Nombre</th></tr>
            </thead>
            <tbody>
              {recetas.map((rec) => (
                <tr key={rec.id} onClick={() => setSelectedItem(rec)} className={selectedItem?.id === rec.id ? "selected-row" : ""}>
                  <td>{rec.id}</td>
                  <td>{rec.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedItem && (
        <div className="orders-definition">
          <h3>Agregar al Menú</h3>
          <p><strong>{selectedItem.nombre}</strong></p>
          <ActionButton label="Agregar al Menú" onClickAction={agregarAlMenu} />
        </div>
      )}

      <div className="orders-menu">
        <h3>Menú</h3>
        <table className="orders-table">
          <thead>
            <tr><th>ID Item</th><th>Nombre</th><th>Acción</th></tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td><ActionButton label="Eliminar" onClickAction={() => eliminarDelMenu(item.id)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {menuItems.length > 0 && (
        <div className="orders-actions">
          <ActionButton label="Guardar" onClickAction={guardarMenu} />
        </div>
      )}

      <div>
        
      </div>

    </div>
  );
};

export default OrdersManagement;