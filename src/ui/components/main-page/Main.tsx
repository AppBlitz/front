import { Header } from "./header/Header";
import "./style.css";

const Main = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <main>
          <section id="bienvenida">
            <h2>¡Hola!</h2>
            <p>
              Gracias por visitar la página de gestión de cocina del Restaurante
              Ilios. Aquí podrás encontrar y gestionar nuestras recetas y menús.
            </p>
          </section>
          <section id="recetas">
            <h2>Recetas</h2>
            <p>Aquí podrás ver y gestionar todas nuestras recetas.</p>
          </section>
          <section id="menus">
            <h2>Menús</h2>
            <p>Aquí podrás ver y gestionar todos nuestros menús.</p>
          </section>
        </main>
        <footer>
          <p>&copy; 2025 Restaurante Ilios</p>
        </footer>
      </section>
    </>
  );
};
export { Main };
