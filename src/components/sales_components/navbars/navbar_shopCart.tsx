import React from "react";
import Navbar from "../../generics/navbar";

const Navbar_home: React.FC = () => {
  const tabs = [
    { label: "Inicio", url: "/sales/home" },
    { label: "Menu", url: "/sales/menu" },
    { label: "Pedidos", url: "/sales/shop-cart/list" },
  ];

  return (
    <Navbar
      leftLabel="Pedidos de usuarios"
      topLabel="Modulo de ventas"
      tabs={tabs}
    />
  );
};

export default Navbar_home;