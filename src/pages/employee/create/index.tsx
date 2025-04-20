
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { DropdownMenu, Header } from "../../../components";
import { saveEmployee } from "./options";
import {
  AREA,
  CCF,
  Cesantias,
  EmployeeCreate,
  EPS,
  Pension,
  Permisions,
  RiskLevel,
  RollEmployee,
  Objeto
} from "../../../types/employee";

function CreateEmployee() {
  const { register, handleSubmit, setValue, watch } = useForm<EmployeeCreate>();
  const [stateButton, setStateButton] = useState<boolean>(false);
  const formValues = watch();

  // Maneja la selección de los valores en los dropdowns
  const handleDropdownSelect = (field: keyof EmployeeCreate, value: string | boolean) => {
    setValue(field, value as any); // Asegura que se establece el tipo correcto en el formulario
  };

  // Habilita/deshabilita el botón de enviar según el estado del formulario
  useEffect(() => {
    const isFormComplete = Object.values(formValues).every(
      (value) => value !== "" && value !== null && value !== undefined
    );
    setStateButton(isFormComplete);
  }, [formValues]);

  return (
    <>
      <Header />
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
          <form onSubmit={handleSubmit(saveEmployee)}>
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
              { label: "EPS", field: "eps", options: EPS },
              { label: "Caja Compensación", field: "cff", options: CCF },
              { label: "ARL", field: "arl", options: ["SURA", "AXA_COLPATRIA", "OTRA"] },
              { label: "Área", field: "area", options: AREA },
              { label: "Nivel de Riesgo", field: "level", options: RiskLevel },
              { label: "Pensión", field: "pension", options: Pension },
              { label: "Cesantías", field: "cesantias", options: Cesantias },
              { label: "Permisos", field: "roll.permissionsEmployee.permissions:", options: Permisions },
              { label: "Permisos sobre", field: "roll.permissionsEmployee.objeto:", options: Objeto },
              { label: "Rol", field: "roll.rollEmployee:", options: RollEmployee },
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
              <button
                type="submit"
                className={`w-full bg-black text-white p-2 rounded ${!stateButton && "opacity-50 cursor-not-allowed"
                  }`}
                disabled={!stateButton}
              >
                Registrar
              </button>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}

export { CreateEmployee };
