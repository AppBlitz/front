import { createBrowserRouter } from "react-router";
import App from "../App";
import { Recipe, Login, Product, Register } from "../pages";

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
    path: "product", Component: Product
  },
  {
    path: "register", Component: Register
  }

]);
