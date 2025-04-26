import React from "react";
import Button from "../../generics/button";

const SeeAllPayrolls: React.FC = () => {
  return (
    <div>
      <Button label="Home" url="/sales/home" newTab={false} />
    </div>
  );
};

export default SeeAllPayrolls;