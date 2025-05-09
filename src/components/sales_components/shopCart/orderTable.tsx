import React, { useState } from "react";
import "../css/orderTable.css"
const OrdersTable: React.FC = () => {
  const [orders, setOrders] = useState([
    { id: 1, fecha: "2025-05-04", cantidad: 2, total: "$20", estado: "Confirmado" },
    { id: 2, fecha: "2025-05-03", cantidad: 1, total: "$10", estado: "Pendiente" },
  ]);

  const refreshOrders = () => {
    setOrders([...orders, { id: orders.length + 1, fecha: "2025-05-02", cantidad: 3, total: "$30", estado: "En proceso" }]);
  };

  return (
    <div className="orders-container">
      <button className="orders-refresh-btn" onClick={refreshOrders}>ACTUALIZAR PEDIDOS</button>
      <table className="orders-table">
        <thead>
          <tr>
            <th className="orders-header">ID</th>
            <th className="orders-header">FECHA</th>
            <th className="orders-header">CANTIDAD</th>
            <th className="orders-header">TOTAL</th>
            <th className="orders-header">ESTADO</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="orders-cell">{order.id}</td>
              <td className="orders-cell">{order.fecha}</td>
              <td className="orders-cell">{order.cantidad}</td>
              <td className="orders-cell">{order.total}</td>
              <td className="orders-cell">{order.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;