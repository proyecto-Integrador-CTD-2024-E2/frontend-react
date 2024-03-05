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

        <div>

            <div>
                <Link to="/registro" className="inline-block p-1 px-md-4 py-md-2 bg-amber-400 text-cyan-900 rounded hover:bg-amber-300">
                   <button>Crear cuenta</button>
                </Link>

                <Link to="/login" className="ml-4 inline-block p-1 px-md-4 py-md-2 bg-amber-400 text-cyan-900 rounded hover:bg-amber-300">
                    <button>Iniciar Sesión</button>
                </Link>
            </div>
            
        </div>
        </header>
    )
}

export default Header;