import { Header } from "../../../components"
import { useForm } from "react-hook-form"
import { EmployeeCreate } from "../../../types/employee";
import { saveEmployee } from "./options";

function CreateEmployee() {
  const { register, handleSubmit } = useForm<EmployeeCreate>();
  return (
    <>
      <Header />
      <div>
        <div>
          <div>
            <form onSubmit={handleSubmit(saveEmployee)} >
              <section>
                <h1>Register empleado </h1>
              </section>
              <section>
                <label className="">Nombre</label>
                <section>
                  <input className="" placeholder="Email" {...register("nameEmployee", { required: true })} />
                </section>
              </section>
              <section>
                <label>Correo eléctronico</label>
                <section>
                  <input className="" {...register("email")} />
                </section>
              </section>
              <section>
                <label>Dirección</label>
                <section>
                  <input className="" {...register("address", { required: true })} />
                </section>
              </section>
              <section>
                <label>Ciudad</label>
                <section>
                  <input className="" {...register("city")} />
                </section>
              </section>
              <section>
                <label>Número de telefono </label>
                <section>
                  <input className="" {...register("phoneNumber")} />
                </section>
              </section>
              <section>
                <label>Fecha de entrada</label>
                <section>
                  <input className="" {...register("entryDate")} />
                </section>
              </section>
              <section>
                <label>Fecha de retiro </label>
                <section>
                  <input className="" {...register("retirementDate")} />
                </section>
              </section>
              <section>
              </section>
              <section>
                <button type="submit" className="">Registrar</button>
              </section>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
export { CreateEmployee }
