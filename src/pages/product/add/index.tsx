import { useForm } from "react-hook-form"
import { saveProduct } from "./Product.ts"
import { Header } from "../../../components/index.ts";
import { Products } from "../../../types/Product.ts";

function Product() {
  const { register, handleSubmit } = useForm<Products>();
  return (<>
    <Header />
    <div>
      <form onSubmit={handleSubmit(saveProduct)}>
        <section>
          <label>Nombre del producto</label>
          <input {...register("nameProduct", { required: true })} />
        </section>
        <section>
          <label> Proveedor</label>
          <input{...register("supplier", { required: false })} />
        </section>
        <section>
          <label>Fecha de expiración</label>
          <input {...register("dateExpiration", { required: true })} />
        </section>
        <section>
          <label>Precio del producto</label>
          <input {...register("priceProduct", { required: true, min: 0 })} />
        </section>
        <section>
          <label>Cantidad de productos</label>
          <input{...register("amount", { required: true, min: 1, max: 100 })} />
        </section>
        <section>
          <label>Peso del producto</label>
          <input {...register("weightProduct", { required: false, min: 0 })} />
        </section>
        <section>
          <label>Imagen del producto</label>
          <input {...register("image", { required: false })} />
        </section>
        <section>
          <button type="submit">Agregar</button>
        </section>
      </form>
    </div>
  </>)
}
export { Product }
