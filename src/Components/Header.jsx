import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 py-3 px-8 bg-sky-900 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-gray-800">
          <img
            className="h-10 w-auto"
            src="../../public/logo5.png"
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex gap-4">
        <Link
          to="/"
          className="px-2 py-1 rounded-xl bg-amber-400 font-semibold"
        >
          Crear cuenta
        </Link>
        <Link
          to="/"
          className="px-2 py-1 rounded-xl bg-amber-400 font-semibold"
        >
          Iniciar Sesion
        </Link>
      </div>
    </header>
  );
};

export default Header;