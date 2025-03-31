import { Header } from "../main-page/header/Header";
import { useNavigate } from "react-router";

const Recetas = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section>
        <Header />
      </section>
      <main className="p-8 max-w-3xl mx-auto">
        <section
          id="recetas"
          className="mb-8 bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl text-gray-800 mb-4">Recetas</h2>
          <div className="flex gap-4 mb-4">
            <button onClick={() => navigate("/recipe/recipedetail")} className="bg-gray-800 text-white px-4 py-2 rounded transition-colors hover:bg-gray-900">
              Cargar Recetas
            </button>
            <a onClick={() => navigate("/recipe/createRecipe")}>
              <button className="bg-gray-800 text-white px-4 py-2 rounded transition-colors hover:bg-gray-900">
                Crear Receta
              </button>
            </a>
          </div>
          <div id="recipeList" className="mt-4"></div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 shadow-md fixed bottom-0 w-full">
        <p className="m-0">&copy; 2025 Restaurante Ilios</p>
      </footer>
    </div>
  );
};
export { Recetas };
