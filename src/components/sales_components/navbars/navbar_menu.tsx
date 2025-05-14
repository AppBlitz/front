import React from "react";
import Navbar from "../../generics/navbar";

interface roleProps{
  userRole: string;
  userId: string;
  token: string;
}
const Navbar_home: React.FC <roleProps> = ({userRole, userId, token}) => {
  const tabs = [
    { label: "Inicio", url: "/home" },
    { label: "Realizar pedido", url: "/sales/shop-cart/get" , allowedRoles: ["waiterEmployee", "SalesManager"]   },
    { label: "Ver pedidos", url: "/sales/shop-cart/list" , allowedRoles: ["waiterEmployee", "SalesManager"]  },
    { label: "Menu", url: "/sales/menu" , allowedRoles: ["CashierEmployee", "SalesManager", "KitchenManager", "KitchenEmployee", "waiterEmployee"]  },
    { label: "Menu detalle", url: "/sales/menu/details", allowedRoles: ["SalesManager", "KitchenManager", "KitchenEmployee", "waiterEmployee"]   },
    { label: "Ver menu", url: "/sales/menu/view" , allowedRoles: ["KitchenManager", "KitchenEmployee" ]  },
    
    
  ];

  return <Navbar leftLabel="Inicio" topLabel="Módulo de ventas" userRole={userRole} userId={userId} token={token} tabs={tabs} />;
};

export default Navbar_home;