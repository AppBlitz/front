import { Header } from "../../components"
import { useForm } from "react-hook-form"
import { BackPrincipal } from "../../components/button"
import { loginUser } from "../../types/user";
import { instance } from "../../service/api";

function Login() {
  const { register, handleSubmit } = useForm<loginUser>();
  function loginUser(user: loginUser) {
    // FIX: this add url of login user
    instance.post("", {
      data: {
        emailUser: user.emailUser,
        passwordUser: user.passwordUser
      }
    })
  }
  return (<>
    <Header />
    <div>
      <form onSubmit={handleSubmit(loginUser)}>
        <section>
          <label>Correo eléctronico</label>
          <input {...register("emailUser", { required: true })} />
        </section>
        <section>
          <label>Contraseña</label>
          <input {...register("passwordUser", { required: true })} />
        </section>
      </form>
      <section>
        <BackPrincipal />
      </section>
    </div>
  </>)
}
export { Login }
