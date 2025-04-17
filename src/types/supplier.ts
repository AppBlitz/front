type registerSupplier = {
  nameSupplier: string,
  location: string,
  orderDate: Date,
  offeredProducts: string[],
  stateActivity: StateEnum

}
enum StateEnum {
  ASSET = "ASSET",
  IDLE = "IDLE"
}
export type { registerSupplier }
