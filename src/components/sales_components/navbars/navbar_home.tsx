import React from "react";
import Navbar from "../../generics/navbar";

const Navbar_home: React.FC = () => {
  const tabs = [
    { label: "Home", url: "/" },
    { label: "Facturas", url: "/sales/invoice/list" },
    { label: "Menu", url: "/sales/menu" },
    { label: "Pedidos", url: "/sales/shop-cart/list" },
  ];

  return (
    <Navbar
      leftLabel="Inicio"
      topLabel="Modulo de ventas"
      tabs={tabs}
    />
  );
};

export default Navbar_home;