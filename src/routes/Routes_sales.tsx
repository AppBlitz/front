import Home_sales from "../pages/sales/home"
import Invoice_details from "../pages/sales/invoice_details"
import Invoice_list from "../pages/sales/invoice_list"
import Menu_list from "../pages/sales/menu_list"
import Mercado_pago from "../pages/sales/mercado_pago"
import ShopCart_details from "../pages/sales/shopCart_details"
import ShopCart_list from "../pages/sales/shopCart_list"


export const salesRoutes = [
    {
        path: "/sales/home", Component: Home_sales
    },

    {
        path: "/sales/invoice/details/", Component: Invoice_details
    },
    
    {
        path: "/sales/invoice/list", Component: Invoice_list
    },
    
    {
        path: "/sales/menu", Component: Menu_list
    },
    
    {
        path: "/sales/mercado-pago", Component: Mercado_pago
    },
    
    {
        path: "/sales/shop-cart/details", Component: ShopCart_details
    },
    
    {
        path: "/sales/shop-cart/list", Component: ShopCart_list
    },
    
];