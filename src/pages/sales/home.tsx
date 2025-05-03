import React from "react";
import Navbar from "../../components/sales_components/navbars/navbar_home";
import { Footer } from "../../components/sales_components/footer_sales";
import Menu_services from "../../components/sales_components/sections/shopCart_services";
import Section from "../../components/generics/section";
import Sales_services from "../../components/sales_components/sections/ventas_services";
const Home_sales: React.FC = () => {

  return (
  <div>
    <Navbar/>
    <Section centered>
      <header>
      <h1>Bienvenido a Ventas Pro</h1>
      <p>Impulsa tus ventas al siguiente nivel</p>
      </header>
      <img 
        src="https://cdn.pixabay.com/photo/2020/08/17/04/04/businessman-5494308_1280.jpg" 
        alt="Ejemplo de imagen" 
        className="w-full h-auto rounded-lg shadow-md" 
      />
    </Section>
      <Footer/>
  </div>
  ); 
};
export default Home_sales;