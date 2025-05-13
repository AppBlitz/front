import { Login } from "../../pages";
import { Login_ventas } from "../../pages/login/Login_ventas";

export const loginRoute = [
    {
        path: "/", Component: Login
    },
    {
        path: "/sale/login", Component: Login_ventas
    },

];