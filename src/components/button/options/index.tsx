import { useNavigate } from "react-router"
function Options() {
  const history = useNavigate();
  return (
    <div>
      <a onClick={() => history("/recipe")} className="font-serif text-white hover:text-blue-400 cursor-pointer" >Recetas</a>
      <a onClick={() => history("/product")} className="font-serif text-white hover:text-blue-400 cursor-pointer"> Product</a>
      <a className="font-serif text-white hover:text-blue-400 cursor-pointer"> | </a>
      <a onClick={() => history("/sale/login")} className="font-serif text-white hover:text-blue-400 cursor-pointer" > Ventas</a>
    </div>
  );
}
export { Options }
