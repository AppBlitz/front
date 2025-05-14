import React from "react";
import Navbar from "../../generics/navbar";

interface roleProps{
  userRole: string,
  userId: string,
  token: string,
}
const Navbar_home_admin: React.FC<roleProps> = ({userRole, userId, token}) => {
  const tabs = [
    { label: "empleados", url: "/employee", allowedRoles: ["ADMIN"] },
    { label: "proveedores", url: "/supplier", allowedRoles: ["ADMIN", "warehouseEmployee"]  },
    { label: "ProductosAdmin", url: "/productmanager", allowedRoles: ["ADMIN"]  },
    { label: "Productos", url: "/product", allowedRoles: ["warehouseEmployee"]  },
    { label: "crear recetas", url: "/recipes", allowedRoles: ["ADMIN","KitchenEmployee"]  },
    { label: "recetas", url: "/recipes/all", allowedRoles: ["ADMIN","KitchenEmployee"]  },
    { label: "ventas", url: "/sales/home", allowedRoles: ["ADMIN","CashierEmployee"]  },
    { label: "Cerrar sesión", url: "/", allowedRoles:["ADMIN","waiterEmployee","warehouseEmployee","KitchenEmployee","CashierEmployee"]},
  ];
  return <Navbar leftLabel="Illios" topLabel="inicio de app" userRole={userRole} userId={userId} token={token} tabs={tabs} />;
};

export default Navbar_home_admin;