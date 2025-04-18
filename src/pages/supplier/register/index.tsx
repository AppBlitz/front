
import { Header } from "../../../components";
import { useForm } from "react-hook-form";
import { registerSupplier } from "../../../types/supplier";
import { registerSuppliers } from "./functions.ts";

function RegisterSupplier() {
  const { register, handleSubmit } = useForm<registerSupplier>();

  return (
    <>
      <Header />
      <div className="bg-gray-200 text-black font-serif min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Registro Proveedor</h1>
          <form onSubmit={handleSubmit(registerSuppliers)} className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium mb-1">Nombre</label>
              <input
                className="w-full h-10 text-black border border-gray-300 rounded-full pl-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nombre"
                {...register("nameSupplier", { required: true })}
              />
            </div>

            {/* Locación */}
            <div>
              <label className="block text-sm font-medium mb-1">Locación</label>
              <input
                className="w-full h-10 text-black border border-gray-300 rounded-full pl-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Locación"
                {...register("location", { required: true })}
              />
            </div>

            {/* Fecha de la orden */}
            <div>
              <label className="block text-sm font-medium mb-1">Fecha de la Orden</label>
              <input
                type="date"
                className="w-full h-10 text-black border border-gray-300 rounded-full pl-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("orderDate", { required: true })}
              />
            </div>

            {/* Productos ofrecidos */}
            <div>
              <label className="block text-sm font-medium mb-1">Productos Ofrecidos</label>
              <textarea
                className="w-full h-24 text-black border border-gray-300 rounded-xl pl-3 pt-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Lista de productos"
                {...register("offeredProducts", { required: true })}
              />
            </div>

            {/* Estado del proveedor */}
            <div>
              <label className="block text-sm font-medium mb-1">Estado del Proveedor</label>
              <select
                className="w-full h-10 text-black border border-gray-300 rounded-full pl-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("stateActivity", { required: true })}
              >
                <option value="" disabled selected>
                  Selecciona el estado
                </option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>

            {/* Botón de envío */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full h-12 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300"
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export { RegisterSupplier };
