import React from "react";
import Navbar from "../../generics/navbar";

interface roleProps{
  userRole: string,
  userId: string,
  token: string,
}
const Navbar_home: React.FC<roleProps> = ({userRole, userId, token}) => {
  const tabs = [
    { label: "Facturas", url: "/sales/invoice/list", allowedRoles: ["CashierEmployee", "SalesManager"] },
    { label: "Menu", url: "/sales/menu", allowedRoles: ["CashierEmployee", "SalesManager", "KitchenManager", "KitchenEmployee", "waiterEmployee"]  },
    { label: "Pedidos", url: "/sales/shop-cart/list", allowedRoles: ["waiterEmployee", "SalesManager"]  },
    { label: "Cerrar sesión", url: "/"},
  ];
  return <Navbar leftLabel="Inicio" topLabel="Módulo de ventas" userRole={userRole} userId={userId} token={token} tabs={tabs} />;
};

export default Navbar_home;