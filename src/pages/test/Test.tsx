import React from "react";
import MonthManagement from "../../components/payroll_components/combobox/month";
import UpdateTypeManagement from "../../components/payroll_components/combobox/updateType";
const Test: React.FC = () => {
  return (
  <div>
    <MonthManagement />
    <UpdateTypeManagement/>
  </div>
  ); // El componente solo renderiza un div vacío
};

export default Test;