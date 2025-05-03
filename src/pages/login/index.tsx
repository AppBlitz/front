import { Header } from "../../components"
import { useForm } from "react-hook-form"
import { loginUser } from "../../types/user";
import { instance } from "../../service/api";
import { useNavigate } from "react-router"

function Login() {
  const { register, handleSubmit } = useForm<loginUser>();
  const navigate = useNavigate()
  function loginUser(user: loginUser) {
    // FIX: this add url of login user
    instance.post("employees/user/login", {
      data: {
        email: user.emailUser,
        password: user.passwordUser
      }
    })
  }
  return (<>
    <Header />
    <div className="bg-gray-200 text-white font-serif">
      <div className="flex justify-self-center items-center h-screen">
        <div className="bg-white rounded-xl w-96 h-112" >
          <form onSubmit={handleSubmit(loginUser)}>
            <section>
              <h2 className="flex justify-left text-black pl-4 pt-4 text-lg">Registro</h2>
            </section>
            <section>
              <p className="flex justify-left text-black pl-8 pt-2 text-xs">Ingreso a  Ilios </p>
            </section>
            <section className="pt-10">
              <label className="flex justify-center text-black">Correo eléctronico</label>
              <section className="flex justify-center text-white">
                <input type="text" className="w-70 h-10 border border-black rounded-full text-black text-center" placeholder="Email"{...register("emailUser", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
              </section>
            </section>
            <section className="pt-10">
              <label className="flex justify-center text-black">Contraseña</label>
              <section className="flex justify-center">
                <input type="password" className="border border-black rounded-full w-70 h-10 text-black text-center" placeholder="Password"{...register("passwordUser", { required: true })} />
              </section>
            </section>
            <section className="flex justify-center pt-6">
              <button type="submit" className="bg-black w-50 text-white rounded-full h-10 hover:cursor-pointer hover:bg-gray-400" > Ingresar</button>
            </section>
          </form>
          <section className="flex justify-between items-center pt-15 w-full px-10">
            <span onClick={() => navigate('/register')} className="text-blue-400 w-32 hover:text-black hover:cursor-pointer mx-5">
              ¿No tiene cuenta?
            </span>
            {/* FIX: url for password */}
            <a onClick={() => navigate("")} className="text-blue-400 hover:text-black hover:cursor-pointer mx-5">
              Olvidó la contraseña
            </a>
          </section>
        </div>
      </div>
    </div>
  </>)
}
export { Login }
