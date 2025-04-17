import { useNavigate } from "react-router"
function BackPrincipal() {
  const history = useNavigate()
  return (
    <div className="flex space-x-4">
      <a onClick={() => history("/")} className="font-serif text-black hover:text-blue-400 cursor-pointer">Regresar</a>
    </div>
  )
}
export { BackPrincipal }
