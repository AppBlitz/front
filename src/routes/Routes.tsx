import { createBrowserRouter } from "react-router";
import App from "../App";
import Test from "../pages/test/Test";
import Payroll from "../pages/payroll/payroll/index"
import Pay from "../pages/payroll/pay/index"
import Update from "../pages/payroll/update/index"
import Payrolls from "../pages/payroll/index"
import { salesRoutes } from "./Routes_sales";
import { testsRoutes } from "./Routes_tests";
import { Login, Register, RegisterSupplier, UpdateSupplier, ProductCards, SupplierTable, RecipeTable, CreateRecipes, CreateEmployee, ProductHistory } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/", Component: ProductHistory,
  },
  {
    path: "test", Component: Test
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

  //rutas nomina
  {
    path: "payrolls", Component: Payrolls
  },
  {
    path: "payrolls/payroll", Component: Payroll
  },
  {
    path: "payrolls/updates", Component: Update
  },
  {
    path: "payrolls/pay", Component: Pay
  },
  // Agregando rutas desde Routes_sales
  ...salesRoutes,

  // Agregando rutas desde Routes_tests
  ...testsRoutes,

]);
