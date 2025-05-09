import React, { useState } from "react";
import "../css/orderManagement.css";
import ActionButton from "../../generics/button_action";

interface OrderItem {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
  tipo: "producto" | "receta";
  isEditing?: boolean; // Estado de edición por fila
}

const OrdersManagement: React.FC = () => {
  const [menuItems, setMenuItems] = useState<OrderItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<OrderItem | null>(null);
  const [cantidad, setCantidad] = useState<number>(1);
  const [precio, setPrecio] = useState<number>(0);

  const productos: OrderItem[] = [
    { id: 1, nombre: "Carne", cantidad: 0, precio: 0, tipo: "producto" },
    { id: 2, nombre: "Papas", cantidad: 0, precio: 0, tipo: "producto" },
  ];

  const recetas: OrderItem[] = [
    { id: 3, nombre: "Hamburguesa", cantidad: 0, precio: 0, tipo: "receta" },
    { id: 4, nombre: "Ensalada", cantidad: 0, precio: 0, tipo: "receta" },
  ];

  // Agregar al menú
  const agregarAlMenu = () => {
    if (selectedItem) {
      const nuevoItem: OrderItem = { ...selectedItem, cantidad, precio, isEditing: false };
      setMenuItems([...menuItems, nuevoItem]);
      limpiarFormulario();
    }
  };

  // Eliminar del menú
  const eliminarDelMenu = (id: number) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  // Activar el modo edición para una fila específica
  const activarEdicion = (id: number) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id ? { ...item, isEditing: true } : item
      )
    );
  };

  // Cancelar la edición de una fila
  const cancelarEdicion = (id: number) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );
  };

  // Guardar los cambios en la fila editada
  const guardarEdicion = (id: number, nuevaCantidad: number, nuevoPrecio: number) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id ? { ...item, cantidad: nuevaCantidad, precio: nuevoPrecio, isEditing: false } : item
      )
    );
  };

  // Limpiar formulario después de agregar o editar
  const limpiarFormulario = () => {
    setSelectedItem(null);
    setCantidad(1);
    setPrecio(0);
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
          <h3>Definir Datos</h3>
          <p><strong>{selectedItem.nombre}</strong></p>
          <div className="input-group">
            <label>Precio unitario:</label>
            <input type="number" value={precio} onChange={(e) => setPrecio(Number(e.target.value))} />
          </div>
          <div className="input-group">
            <label>Cantidad:</label>
            <input type="number" value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))} />
          </div>
          <ActionButton label="Agregar al Menú" onClickAction={agregarAlMenu} />
        </div>
      )}

      <div className="orders-menu">
        <h3>Menú</h3>
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID Item</th>
              <th>Nombre</th>
              <th>Precio unitario</th>
              <th>Cantidad</th>
              <th>Valor total</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>
                  {item.isEditing ? (
                    <input type="number" defaultValue={item.precio} onChange={(e) => setPrecio(Number(e.target.value))} />
                  ) : (
                    `$${item.precio}`
                  )}
                </td>
                <td>
                  {item.isEditing ? (
                    <input type="number" defaultValue={item.cantidad} onChange={(e) => setCantidad(Number(e.target.value))} />
                  ) : (
                    item.cantidad
                  )}
                </td>
                <td>${item.precio * item.cantidad}</td>
                <td>
                  {item.isEditing ? (
                    <>
                      <ActionButton label="Guardar cambios" onClickAction={() => guardarEdicion(item.id, cantidad, precio)} />
                      <ActionButton label="Cancelar" onClickAction={() => cancelarEdicion(item.id)} />
                    </>
                  ) : (
                    <>
                      <ActionButton label="Editar" onClickAction={() => activarEdicion(item.id)} />
                      <ActionButton label="Eliminar" onClickAction={() => eliminarDelMenu(item.id)} />
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersManagement;