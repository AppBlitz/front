import { useLocation, useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold">Bienvenido a Restaurante Ilios</h1>
      </div>
      <nav>
        <ul className="list-none flex justify-center gap-4">
          <li>
            <a
              onClick={() => navigate("recipe")}
              className="cursor-pointer text-white font-bold hover:text-yellow-300 transition-colors"
            >
              Recetas
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("menu")}
              className="cursor-pointer text-white font-bold hover:text-yellow-300 transition-colors"
            >
              Menús
            </a>
          </li>
          {location.pathname !== "/recipe" && (
            <li>
              <a
                onClick={() => navigate("products")}
                className="cursor-pointer text-white font-bold hover:text-yellow-300 transition-colors"
              >
                Productos
              </a>
            </li>
          )}
          <li>
            <a
              href="https://teamroblox.icu/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-yellow-300 transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
