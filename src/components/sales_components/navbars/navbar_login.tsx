import React from "react";
import Navbar from "../../generics/navbar";

const Navbar_login: React.FC = () => {
  const tabs = [
    { label: "Home", url: "/" },
    
  ];

  return (
    <Navbar
      leftLabel="BIENVENIDO"
      topLabel="Modulo de ventas"
      tabs={tabs}
    />
  );
};

export default Navbar_login;