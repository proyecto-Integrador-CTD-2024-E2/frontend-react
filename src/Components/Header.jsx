import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import Avatar from "./Avatar";

const Header = () => {
  const { isLogged } = useAuth();
  console.log(isLogged);
  const location = useLocation();
  const isDetailPage = location.pathname.includes("/detail");
  const col12Classes = isDetailPage
    ? "fixed  left-0 right-0 top-0 z-50 py-4 px-5 md:px-8 bg-colorClaro flex items-center justify-between shadow-md shadow-slate-200 lg:!px-[18em]"
    : "fixed  left-0 right-0 top-0 z-50 py-4 px-5 md:px-8 bg-colorClaro flex items-center justify-between shadow-md shadow-slate-200";

  const [token, setToken] = useState(null);

  useEffect(() => {
    // Aquí tomamos el token que está almacenado en localStorage
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <header className={col12Classes}>
      <div className="flex items-center">
        <Link to="/" className="text-gray-800">
          <img
            className="h-10 w-auto"
            src="../../public/logoSVG.svg"
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex gap-2 md:gap-4">
        {token ? (
          <Avatar />
        ) : (
          <>
            <Link
              to="/registro"
              className="px-2 py-1 md:px-4 text-base rounded-full bg-colorPrimario text-white"
            >
              Crear cuenta
            </Link>
            <Link
              to="/login"
              className="px-2 py-1 md:px-4 text-base rounded-full bg-colorPrimario text-white"
            >
              Iniciar Sesion
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
