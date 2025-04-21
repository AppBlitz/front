import { createBrowserRouter } from "react-router";
import App from "../App";
import { Login, Register, RegisterSupplier, UpdateSupplier, ProductCards, SupplierTable, RecipeTable, CreateRecipes, CreateEmployee, ProductHistory } from "../pages";
import { RecipeTablemanager } from "../pages/employee/Manager/recipes";

export const router = createBrowserRouter([
  {
    path: "/", Component: App,
  },
  {
    path: "login", Component: Login
  },
  {
    path: "product", Component: ProductCards
  },
  {
    path: "register", Component: Register
  },
  {
    path: "register/supplier", Component: RegisterSupplier
  },
  {
    path: "update/supplier", Component: UpdateSupplier
  },
  {
    path: "supplier", Component: SupplierTable
  },
  {
    path: "recipe/all", Component: RecipeTable
  },
  {
    path: "create/recipe", Component: CreateRecipes
  },
  {
    path: "create/employee", Component: CreateEmployee
  },
  {
    path: "productmanager", Component: ProductHistory
  },
  {
    path: "recipemanager", Component: RecipeTablemanager
  }





]);
