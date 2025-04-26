import React from "react";
import Navbar from "../../generics/navbar";

const Navbar_home: React.FC = () => {
  const tabs = [
    { label: "Inicio", url: "/sales/home" },
    { label: "Realizar pedido", url: "/sales/shop-cart/details" },
    { label: "Ver pedidos", url: "/sales/shop-cart/list" },
    
  ];

  return (
    <Navbar
      leftLabel="MENU"
      topLabel="Modulo de ventas"
      tabs={tabs}
    />
  );
};

export default Navbar_home;