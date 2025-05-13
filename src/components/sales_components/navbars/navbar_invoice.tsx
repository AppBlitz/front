import React from "react";
import Navbar from "../../generics/navbar";

interface roleProps{
  userRole: string,
  userId: string,
  token: string,
}
const Navbar_home: React.FC <roleProps> = ({userRole, userId, token}) => {
  const tabs = [
    { label: "Inicio", url: "/sales/home" },
    { label: "Facturar", url: "/sales/invoice/get/" },
    { label: "Mercado pago", url: "/sales/mercado-pago" },
  ];

  return <Navbar leftLabel="Inicio" topLabel="Módulo de ventas" userRole={userRole} userId={userId} token={token} tabs={tabs} />;
};

export default Navbar_home;