import { createBrowserRouter } from "react-router";
import { Main } from "../ui/components/main-page/Main";
import { Product } from "../ui/components/products/";
import { Menus } from "../ui/components/menus";
import { Recetas } from "../ui/components/recetas";
import { CreateRecipe } from "../ui/components/recetas/crearReceta";
import RecipeDetail from "../ui/components/recetas/cargarRecetas";

export const router = createBrowserRouter([
  { path: "", Component: Main },
  { path: "products", Component: Product },
  { path: "menu", Component: Menus },
  {
    path: "recipe",
    Component: Recetas,
  },
  {
    path: "recipe/createrecipe",
    Component: CreateRecipe,
  },
  { path: "recipe/recipedetail", Component: RecipeDetail }
]);
