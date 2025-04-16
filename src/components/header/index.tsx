
function Header() {
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-800">
        <div className="flex items-center">
          <h2 className="text-lg font-serif text-white hover:text-blue-400 mr-4">Ilios</h2>
        </div>

        <div>
          <a className="font-serif text-white hover:text-blue-400">Recetas</a>
        </div>

        <div className="flex space-x-4">
          <a className="font-serif text-white hover:text-blue-400">Ingresar</a>
          <a className="font-serif text-white hover:text-blue-400">Registrarse</a>
        </div>
      </nav>
    </>
  );
}

export { Header };
