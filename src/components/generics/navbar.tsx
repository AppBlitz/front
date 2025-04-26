import React from "react";
import "./css/navbar.css";

// Tipo para los elementos de pestañas
type Tab = {
  label: string;
  url: string;
};

type NavbarProps = {
  leftLabel: string;
  topLabel: string;
  tabs: Tab[];
};

const Navbar: React.FC<NavbarProps> = ({ leftLabel, topLabel, tabs }) => {
  return (
    <div className="navbar">
      {/* Label superior */}
      <div className="navbar-top-label">{topLabel}</div>

      <div className="navbar-main">
        {/* Label grande a la izquierda */}
        <div className="navbar-left-label">{leftLabel}</div>

        {/* Espacio vacío en el centro */}
        <div className="navbar-center"></div>

        {/* Botones de pestañas en la esquina inferior derecha */}
        <div className="navbar-tabs">
          {tabs.map((tab, index) => (
            <a key={index} href={tab.url} className="navbar-tab">
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;