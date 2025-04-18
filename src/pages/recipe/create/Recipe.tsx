
import { useState, useEffect } from "react";
import { instance } from "../../../service/api";
import { Header } from "../../../components";
import { useForm } from "react-hook-form";
import { saveRecipe } from "./options.ts";
import { Product } from "../../../types/Product.ts";

enum Estate {
  ACTIVE = "Activo",
  INACTIVE = "Inactivo",
}

interface createRecipe {
  name: string;
  ingredients: number[];
  instructions: string;
  preparationTime: number;
  servings: number;
  comment?: string;
  creationDate: string;
  recipeStatus: Estate;
}

function CreateRecipes() {
  const { register, handleSubmit, formState: { errors } } = useForm<createRecipe>();
  const [ingredients, setIngredients] = useState<Product[]>([]);

  // Cargar los ingredientes al cargar el componente
  useEffect(() => {
    instance
      .get("product/allProducts")
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setIngredients(response.data);
        } else {
          console.error("La respuesta no contiene una lista válida de ingredientes.");
        }
      })
      .catch((error) => {
        console.error("Error al cargar los ingredientes:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="bg-gray-300 min-h-screen flex justify-center items-center p-4">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full">
          <h1 className="text-black text-2xl font-bold text-center mb-6">Crear Receta</h1>
          <form onSubmit={handleSubmit(saveRecipe)}>
            {/* Nombre */}
            <section className="mb-4">
              <label className="block text-black font-medium mb-2">Nombre</label>
              <input
                className="w-full p-2 border border-black rounded"
                {...register("name", { required: "Este campo es obligatorio." })}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </section>

            {/* Ingredientes */}
            <section className="mb-4">
              <label className="block text-black font-medium mb-2">Ingredientes</label>
              <select
                className="w-full p-2 border border-black rounded"
                {...register("ingredients", { required: "Seleccione al menos un ingrediente." })}
                multiple
              >
                {ingredients.map((ingredient) => (
                  <option key={ingredient.id} value={ingredient.id}>
                    {ingredient.nameProduct || `Ingrediente`}
                  </option>
                ))}
              </select>
              {errors.ingredients && <span className="text-red-500 text-sm">{errors.ingredients.message}</span>}
            </section>

            {/* Instrucciones */}
            <section className="mb-4">
              <label className="block text-black font-medium mb-2">Instrucciones</label>
              <textarea
                className="w-full p-2 border border-black rounded"
                {...register("instructions", { required: "Este campo es obligatorio." })}
              ></textarea>
              {errors.instructions && <span className="text-red-500 text-sm">{errors.instructions.message}</span>}
            </section>

            {/* Tiempo de preparación */}
            <section className="mb-4">
              <label className="block text-black font-medium mb-2">Tiempo de preparación (minutos)</label>
              <input
                type="number"
                className="w-full p-2 border border-black rounded"
                {...register("preparationTime", { required: "Este campo es obligatorio." })}
              />
              {errors.preparationTime && <span className="text-red-500 text-sm">{errors.preparationTime.message}</span>}
            </section>

            {/* Porciones */}
            <section className="mb-4">
              <label className="block text-black font-medium mb-2">Porciones</label>
              <input
                type="number"
                className="w-full p-2 border border-black rounded"
                {...register("servings", { required: "Este campo es obligatorio." })}
              />
              {errors.servings && <span className="text-red-500 text-sm">{errors.servings.message}</span>}
            </section>

            {/* Comentarios */}
            <section className="mb-4">
              <label className="block text-black font-medium mb-2">Comentarios</label>
              <textarea
                className="w-full p-2 border border-black rounded"
                {...register("comment")}
              ></textarea>
            </section>

            {/* Fecha de creación */}
            <section className="mb-4">
              <label className="block text-black font-medium mb-2">Fecha de creación</label>
              <input
                type="date"
                className="w-full p-2 border border-black rounded"
                {...register("creationDate", { required: "Este campo es obligatorio." })}
              />
              {errors.creationDate && <span className="text-red-500 text-sm">{errors.creationDate.message}</span>}
            </section>

            {/* Estado */}
            <section className="mb-4">
              <label className="block text-black font-medium mb-2">Estado</label>
              <select
                className="w-full p-2 border border-black rounded"
                {...register("recipeStatus", { required: "Seleccione un estado." })}
              >
                <option value={Estate.ACTIVE}>Activo</option>
                <option value={Estate.INACTIVE}>Inactivo</option>
              </select>
              {errors.recipeStatus && <span className="text-red-500 text-sm">{errors.recipeStatus.message}</span>}
            </section>

            {/* Botón Guardar */}
            <section>
              <button
                type="submit"
                className="w-full p-2 bg-black text-white font-medium rounded hover:bg-gray-800"
              >
                Guardar
              </button>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}

export { CreateRecipes };
