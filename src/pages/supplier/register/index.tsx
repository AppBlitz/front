import { Header } from "../../../components"
import { useForm } from "react-hook-form"
import { registerSupplier } from "../../../types/supplier";
import { registerSuppliers } from "./functions.ts"
import { BackPrincipal } from "../../../components/button";

// FIX: decoration
function RegisterSupplier() {
  const { register, handleSubmit } = useForm<registerSupplier>();
  return (<>
    <Header />
    <div>
      <form onSubmit={handleSubmit(registerSuppliers)}>
        <section>
          <label>Nombre</label>
          <input {...register("nameSupplier", { required: true })} />
        </section>
        <section>
          <label>Locación</label>
          <input {...register("location", { required: true })} />
        </section>
        <section>
          <label>Fecha de la orden</label>
          <input {...register("orderDate", { required: true })} />
        </section>
        <section>
          <label>Productos ofrecidos</label>
          <input {...register("offeredProducts", { required: true })} />
        </section>
        <section>
          <label>Estado del proveedor</label>
          <input {...register("stateActivity", { required: true })} />
        </section>
        <section>
          <button type="submit"></button>
        </section>
      </form>
      <section>
        <BackPrincipal />
      </section>
    </div>
  </>)
}
export { RegisterSupplier }
