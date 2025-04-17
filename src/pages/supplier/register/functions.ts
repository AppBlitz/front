import { instance } from "../../../service/api";
import { registerSupplier } from "../../../types/supplier";

function registerSuppliers(supplier: registerSupplier) {
  // FIX: this url of register supplier
  instance.post("", {
    data: {
      nameSupplier: supplier.nameSupplier,
      location: supplier.location,
      orderDate: supplier.orderDate,
      offeredProducts: supplier.offeredProducts,
      stateActivity: supplier.stateActivity
    }
    // FIX: Put errors
  })

}
export { registerSuppliers }

