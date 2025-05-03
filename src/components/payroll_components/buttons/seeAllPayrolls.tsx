import React from "react";
import Button from "../../generics/button_url";

const SeeAllPayrolls: React.FC = () => {
  return (
    <div>
      <Button label="Listar nominas" url="/payrolls" newTab={true} />
    </div>
  );
};

export default SeeAllPayrolls;