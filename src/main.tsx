import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { router } from "./routes/Routes.tsx"
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
