import { useEffect, useState } from "react";
import { DropdownMenu, Header } from "./components"
import { CCF } from "./types/employee";

function App() {
  const [seleccion, setSeleccion] = useState<string | null>(null);
  useEffect(() => {
    console.log(seleccion)
  }, [seleccion])
  return (
    <div className="bg-black">
      <Header />
      <DropdownMenu opciones={Object.values(CCF)} onSelect={setSeleccion} />
    </div>)
}
export default App
