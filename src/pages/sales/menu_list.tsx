import React from "react";
import Navbar from "../../components/sales_components/navbars/navbar_menu"
import { Footer } from "../../components/sales_components/footer_sales";
import Tabla_menu from "../../components/sales_components/tablas/tabla_menu";
import Section from "../../components/generics/section";
import Button from "../../components/generics/button_url";

const Menu_list: React.FC = () => {

  return (
  <div>
    <Navbar/>
    <Section>
      <h1>
        Historial de menus
      </h1>
    </Section>
    <Section>
      <Tabla_menu/>
    </Section>
    <Section direction = "row" centered>
      <Button label="Ver menu activo" url="#" />
      <a>     </a>
      <Button label="Relizar Pedido" url="#" />
      <a>     </a>
    </Section>
  
    <Footer/>
  </div>
  ); 
};

export default Menu_list;