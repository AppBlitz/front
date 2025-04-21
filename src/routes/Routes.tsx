import { createBrowserRouter } from "react-router";
import { Login, Register, RegisterSupplier, UpdateSupplier, ProductCards, SupplierTable, RecipeTable, CreateRecipes, CreateEmployee, ProductHistory } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/", Component: ProductHistory,
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





]);
