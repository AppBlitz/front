
import { useState, useEffect } from "react";
import { instance } from "../../../service/api";
import { Header } from "../../../components";
import { useForm, useFieldArray } from "react-hook-form";
import { saveRecipe } from "./options.ts";
import { createRecipe, Ingredient, Estate } from "../../../types/recipe";
import { Product } from "../../../types/Product.ts";

function CreateRecipes() {
  const { register, handleSubmit, control, formState: { errors } } = useForm<createRecipe>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });
  const [ingredients, setIngredients] = useState<Product[]>([]);

  // Cargar los ingredientes al cargar el componente
  useEffect(() => {
    instance
      .get("product/allProducts")
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          console.log(response.data);
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
    < div className = "bg-gray-300 min-h-screen flex justify-center items-center p-4" >
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full" >
        <h1 className="text-black text-2xl font-bold text-center mb-6" > Crear Receta </h1>
          < form onSubmit = { handleSubmit(saveRecipe) } >
            <section className="mb-4" >
              <label className="block text-black font-medium mb-2" > Nombre </label>
                < input
  className = "w-full p-2 border border-black rounded"
  {...register("name", { required: true }) }
              />
  { errors.name && <span className="text-red-500 text-sm" > Este campo es obligatorio.</span> }
  </section>

    < section className = "mb-4" >
      <label className="block text-black font-medium mb-2" > Ingredientes </label>
  {
    fields.map((field, index) => (
      <div key= { field.id } className = "mb-2 p-2 border border-gray-300 rounded" >
      <select
                    className="w-full mb-2 p-2 border border-black rounded"
                    { ...register(`ingredients.${index}.productId`, { required: true }) }
      >
      {
        ingredients.map((ingredient) => (
          <option key= { ingredient.id } value = { ingredient.id } >
          { ingredient.nameProduct }
          </option>
        ))
  }
  </select>
    < input
  type = "number"
  className = "w-full mb-2 p-2 border border-black rounded"
  placeholder = "Cantidad"
  {...register(`ingredients.${index}.quantity`, { required: true }) }
                  />
    < input
  type = "text"
  className = "w-full mb-2 p-2 border border-black rounded"
  placeholder = "Unidad de medida"
  {...register(`ingredients.${index}.unitOfMeasure`, { required: true }) }
                  />
    < input
  type = "text"
  className = "w-full mb-2 p-2 border border-black rounded"
  placeholder = "Notas adicionales"
  {...register(`ingredients.${index}.additionalNotes`) }
                  />
    < button
  type = "button"
  className = "w-full p-2 bg-red-500 text-white font-medium rounded hover:bg-red-700"
  onClick = {() => remove(index)
}
                  >
  Eliminar Ingrediente
    </button>
    </div>
              ))}
<button
                type="button"
className = "w-full p-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-700"
onClick = {() =>
append({ productId: "", quantity: 0, unitOfMeasure: "", additionalNotes: "" })
                }
              >
  Agregar Ingrediente
    </button>
{ errors.ingredients && <span className="text-red-500 text-sm" > Seleccione al menos un ingrediente.</span> }
</section>

{/* Secciones restantes */ }
<section className="mb-4" >
  <label className="block text-black font-medium mb-2" > Instrucciones </label>
    < textarea
className = "w-full p-2 border border-black rounded"
{...register("instructions", { required: true }) }
              > </textarea>
{ errors.instructions && <span className="text-red-500 text-sm" > Este campo es obligatorio.</span> }
</section>

  < section className = "mb-4" >
    <label className="block text-black font-medium mb-2" > Tiempo de preparación(minutos) </label>
      < input
type = "number"
className = "w-full p-2 border border-black rounded"
{...register("preparationTime", { required: true }) }
              />
{ errors.preparationTime && <span className="text-red-500 text-sm" > Este campo es obligatorio.</span> }
</section>

  < section className = "mb-4" >
    <label className="block text-black font-medium mb-2" > Porciones </label>
      < input
type = "number"
className = "w-full p-2 border border-black rounded"
{...register("servings", { required: true }) }
              />
{ errors.servings && <span className="text-red-500 text-sm" > Este campo es obligatorio.</span> }
</section>

  < section className = "mb-4" >
    <label className="block text-black font-medium mb-2" > Comentarios </label>
      < textarea
className = "w-full p-2 border border-black rounded"
{...register("comment") }
              > </textarea>
  </section>

  < section className = "mb-4" >
    <label className="block text-black font-medium mb-2" > Fecha de creación </label>
      < input
type = "date"
className = "w-full p-2 border border-black rounded"
{...register("creationDate", { required: true }) }
              />
{ errors.creationDate && <span className="text-red-500 text-sm" > Este campo es obligatorio.</span> }
</section>

  < section className = "mb-4" >
    <label className="block text-black font-medium mb-2" > Estado </label>
      < select
className = "w-full p-2 border border-black rounded"
{...register("recipeStatus", { required: true }) }
              >
  <option value={ Estate.ACTIVE }> Activo </option>
    < option value = { Estate.INACTIVE } > Inactivo </option>
      </select>
{ errors.recipeStatus && <span className="text-red-500 text-sm" > Seleccione un estado.</span> }
</section>

  < section >
  <button
                type="submit"
className = "w-full p-2 bg-black text-white font-medium rounded hover:bg-gray-800"
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
