import { useNavigate, useLocation } from "react-router"
import React from "react"
import { Options, User } from "../button";

function Header() {
  const history = useNavigate();
  const location = useLocation().pathname;
  const [state, setState] = React.useState(1)

  React.useEffect(() => {
    if (location === "/") {
      setState(0);
    }
    else {
      if (location === "/home") {
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
          state === 1 && <Options />
        }
        {
          state === 0 && <User />
        }
      </nav >
    </div>
  );
}

export { Header };
