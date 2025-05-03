import React from "react";
import Navbar from "../../generics/navbar";

const Navbar_home: React.FC = () => {
  const tabs = [
    { label: "Inicio", url: "/sales/home" },
    { label: "Facturar", url: "/sales/invoice/get/" },
    { label: "Mercado pago", url: "/sales/mercado-pago" },
  ];

  return (
    <Navbar
      leftLabel="Facturación"
      topLabel="Modulo de ventas"
      tabs={tabs}
    />
  );
};

export default Navbar_home;