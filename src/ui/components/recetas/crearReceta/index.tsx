const CreateRecipe = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <header className="bg-gray-800 text-white py-4 shadow-md">
        <h1 className="text-center text-3xl font-bold">Crear Nueva Receta</h1>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <section
          id="crearReceta"
          className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Nueva Receta
          </h2>
          <form id="newRecipeForm" className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="block font-bold text-gray-700 mb-1"
              >
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="ingredients"
                className="block font-bold text-gray-700 mb-1"
              >
                Ingredientes:
              </label>
              <label
                htmlFor="ejemplo"
                className="block text-sm text-gray-500 mb-2"
              >
                *ejemplo: Frijoles (500 grams Cocidos), Arroz (200 grams Cocido)
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-500"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="instructions"
                className="block font-bold text-gray-700 mb-1"
              >
                Instrucciones:
              </label>
              <textarea
                id="instructions"
                name="instructions"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-500"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="preparationTime"
                className="block font-bold text-gray-700 mb-1"
              >
                Tiempo de preparación (minutos):
              </label>
              <input
                type="number"
                id="preparationTime"
                name="preparationTime"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="servings"
                className="block font-bold text-gray-700 mb-1"
              >
                Porciones:
              </label>
              <input
                type="number"
                id="servings"
                name="servings"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="comment"
                className="block font-bold text-gray-700 mb-1"
              >
                Comentario:
              </label>
              <textarea
                id="comment"
                name="comment"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
            >
              Guardar Receta
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Restaurante Ilios</p>
      </footer>
    </div>
  );
};

export { CreateRecipe };
