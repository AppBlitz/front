import { Header } from "../../components"
import { useForm } from "react-hook-form"
import { registerUser } from "../../types/user"
import { instance } from "../../service/api"
import { BackPrincipal } from "../../components/button"

function Register() {
  const { register, handleSubmit } = useForm<registerUser>()
  function registerUser(userRegister: registerUser) {
    // FIX: This add url of register user
    instance.post("", {
      data: {
        nameComple: userRegister.nameComple,
        emailUser: userRegister.emailUser,
        passwordUser: userRegister.passwordUser,
      }
    })
  }
  return (<>
    <Header />
    <div>
      <form onSubmit={handleSubmit(registerUser)}>
        <section>
          <label>Nombre completo</label>
          <input {...register("nameComple", { required: true })} />
        </section>
        <section>
          <label>Correo eléctronico</label>
          <input {...register("emailUser", { required: true })} />
        </section>
        <section>
          <label>Contraseña</label>
          <input {...register("passwordUser", { required: true })} />
        </section>
        <section>
          <button type="submit">Registrarse</button>
        </section>
      </form>
      <section>
        <BackPrincipal />
      </section>
    </div>
  </>)
}
export { Register }
