import Navbar from "../../../components/sales_components/navbars/navbar_home_admin";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { DropdownMenu } from "../../../components";
import { saveEmployee } from "./options";
import { EmployeeCreate,
  RollEmployee
} from "../../../types/employee";
import { useLocation, useNavigate } from "react-router";
import { messageValidation } from "../../../components/button/messageValidation/message";

function CreateEmployee() {
  const { register, handleSubmit, setValue, watch } = useForm<EmployeeCreate>();
  const [stateButton, setStateButton] = useState<boolean>(false);
  //const formValues = watch();

  const location = useLocation();
  const navigate = useNavigate(); // Inicializamos useNavigate
  const queryParams = new URLSearchParams(location.search);
  const userRole = queryParams.get("role");
  const token = queryParams.get("token");
  const userId = queryParams.get("id");

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const onSubmit = async (data: EmployeeCreate) => {
  const response = await saveEmployee(data); 

  setMessage(response.message);
  setMessageType(response.success ? "success" : "error");
};

    // Redirigir si no hay role
  useEffect(() => {
    if (!userRole||userRole=="") {
      navigate("/"); // Redirige a la página de login
    }
  }, [userRole, navigate]);


const handleDropdownSelect = (field: keyof EmployeeCreate, value: string | boolean) => {
  setValue(field, value, { shouldValidate: true });
};

useEffect(() => {
  const subscription = watch((values) => {
    const isFormComplete = Object.values(values).every(
      (value) => value !== "" && value !== null && value !== undefined
    );
    setStateButton(isFormComplete);
  });
  return () => subscription.unsubscribe();
}, [watch]);

  return (
    <>
      <Navbar userRole= {userRole||""} userId={userId||""} token={token||""}/>

      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Título */}
            <section>
              <h1 className="text-2xl font-bold text-black mb-4">
                Registrar empleado
              </h1>
            </section>

            {/* Campos de entrada */}
            {[
              { label: "Nombre", name: "nameEmployee", type: "text" },
              { label: "Salario base", name: "baseSalary", type: "number" },
              { label: "Correo electrónico", name: "email", type: "email" },
              { label: "Dirección", name: "address", type: "text" },
              { label: "Ciudad", name: "city", type: "text" },
              { label: "Número de teléfono", name: "phoneNumber", type: "text" },
              { label: "Fecha de entrada", name: "entryDate", type: "date" },
              { label: "Contraseña", name: "password", type: "password" },
            ].map(({ label, name, type }) => (
              <section key={name} className="mb-4">
                <label className="block text-black font-medium mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  className="w-full border border-gray-300 rounded p-2 text-black"
                  {...register(name as keyof EmployeeCreate, { required: true })}
                />
              </section>
            ))}

            {/* Campo "Está Retirado" */}
            <section className="mb-4">
              <label className="block text-black font-medium mb-2">
                ¿Está retirado?
              </label>
              <DropdownMenu
                opciones={["Sí", "No"]}
                onSelect={(value) => handleDropdownSelect("isRetired", value === "Sí")}
                name="Retirado"
              />
            </section>

            {/* Dropdowns */}
            {[
              
              { 
                label: "Rol", 
                field: "roll", 
                options: Object.values(RollEmployee) 
              },
            ].map(({ label, field, options }) => (
              <section key={field} className="mb-4 relative">
                <DropdownMenu
                  opciones={Object.values(options)}
                  onSelect={(value) => handleDropdownSelect(field as keyof EmployeeCreate, value)}
                  name={label}
                />
              </section>
            ))}

            {/* Botón de envío */}
            <section>
              { <button
                type="submit"
                className={`w-full bg-black text-white p-2 rounded ${!stateButton && "opacity-50 cursor-not-allowed"
                  }`}
                disabled={!stateButton}
              >
                Registrar
              </button> }
            </section>
          </form>
          {messageValidation(messageType,message)}
        </div>
      </div>
    </>
  );
}

export { CreateEmployee };
