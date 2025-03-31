const RecipeDetail = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gray-800 text-white py-4 shadow-md text-center">
        <h1 className="text-3xl font-bold">Detalle de la Receta</h1>
      </header>

      <main className="flex-grow p-4">
        <section className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Receta</h2>

          <div
            id="recipeDetail"
            className="flex flex-col gap-4 bg-gray-50 p-4 rounded-md shadow-sm"
          >
            <p className="text-lg leading-relaxed">
              <span className="font-bold text-gray-800">Nombre:</span> Ejemplo de Receta
            </p>
            <p className="text-lg leading-relaxed">
              <span className="font-bold text-gray-800">Ingredientes:</span> Lista de ingredientes
            </p>
            <p className="text-lg leading-relaxed">
              <span className="font-bold text-gray-800">Instrucciones:</span> Paso a paso
            </p>
          </div>

          <div
            id="crudButtons"
            className="flex justify-between items-center mt-8"
          >
            <div className="flex gap-4">
              <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">
                Editar
              </button>
              <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">
                Eliminar
              </button>
            </div>
            <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">
              Atrás
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 shadow-md">
        <p>&copy; 2025 Restaurante Ilios</p>
      </footer>
    </div>
  );
};

export default RecipeDetail;
