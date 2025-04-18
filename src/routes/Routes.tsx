import { createBrowserRouter } from "react-router";
import App from "../App";
import { Recipe, Login, Register, RegisterSupplier, UpdateSupplier, ProductCards, EmployeeTable, SupplierTable } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/", Component: App,
  },
  {
    path: "recipe", Component: Recipe
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
    path: "employees", Component: EmployeeTable
  },
  {
    path: "supplier", Component: SupplierTable
  }



]);
