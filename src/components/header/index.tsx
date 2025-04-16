import { useNavigate, useLocation } from "react-router"
import React from "react"
import { BackPrincipal, Options, User } from "../button";

function Header() {
  const history = useNavigate();
  const location = useLocation().pathname;
  const [state, setState] = React.useState(0)

  React.useEffect(() => {
    if (location === "/") {
      setState(0);
    }
    else {
      if (location === "/login") {
        setState(1);
      }
      else if (location === "/register") {
        setState(1);
      }
    }
  }, [location, state])
  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-800">
        <div className="flex items-center">
          <h2 onClick={() => history("/")} className="text-lg font-serif text-white hover:text-blue-400 mr-4 cursor-pointer" >Ilios</h2>
        </div>
        {
          state === 0 ?
            <Options />
            : null
        }
        {
          state === 0 ?
            <User />
            :
            <BackPrincipal />
        }
      </nav >
    </div>
  );
}

export { Header };
