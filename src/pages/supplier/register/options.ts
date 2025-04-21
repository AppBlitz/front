
import { instance } from "../../../service/api";
import { registerSuppliers } from "../../../types/supplier";

function registerSupplierss(supplier: registerSuppliers): void {
  let state: string = "IDLE";

  if (supplier.stateActivity === "Activo") {
    state = "ASSET";
  }

  const offeredProducts = supplier.offeredProducts
    ? splitString(supplier.offeredProducts.toString(), ",")
    : [];

  instance.post("supplier/add", {
    nameSupplier: supplier.nameSupplier,
    location: supplier.location,
    orderDate: supplier.orderDate,
    offeredProducts: offeredProducts,
    stateActivity: state,
  })
    .then(response => {
      console.log("Supplier registered successfully:", response.data);
    })
    .catch(error => {
      console.error("Error registering supplier:", error);
    });
}

export { registerSupplierss };

function splitString(input: string, separator: string): string[] {
  return input.split(separator);
}
