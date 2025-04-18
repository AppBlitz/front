
import { registerSuppliers } from "../../../types/supplier";
import axios from "axios"

function registerSupplierss(supplier: registerSuppliers) {
  let state: string = "IDLE";
  if (supplier.stateActivity === "Activo") {
    state = "ASSET";
  }
  axios(
    {
      method: "post",
      url: "http://localhost:8080/supplier/add",
      data: {
        nameSupplier: supplier.nameSupplier,
        location: supplier.location,
        orderDate: supplier.orderDate,
        offeredProducts: splitString(supplier.offeredProducts + "", ","),
        stateActivity: state
      }
    })

}
export { registerSupplierss }
function splitString(input: string, separator: string): string[] {
  return input.split(separator);
}
