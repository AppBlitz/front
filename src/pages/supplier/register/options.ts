
import { instance } from "../../../service/api";
import { registerSuppliers } from "../../../types/supplier";

function registerSupplierss(supplier: registerSuppliers) {
  let state: string = "IDLE";
  if (supplier.stateActivity === "Activo") {
    state = "ASSET";
  }
  instance.post("supplier/add", {
    nameSupplier: supplier.nameSupplier,
    location: supplier.location,
    orderDate: supplier.orderDate,
    offeredProducts: splitString(supplier.offeredProducts + "", ","),
    stateActivity: state
  })

}
export { registerSupplierss }
function splitString(input: string, separator: string): string[] {
  return input.split(separator);
}
