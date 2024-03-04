
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-cyan-900">
        <div className=" mx-auto px-1 px-mx-4 flex justify-between items-center h-16">
            <Link to="/">
                <img
                    src="../../public/logo5.png"
                    alt="logo"
                    className="h-8"
                />
            </Link>

            <div>

            <div>
                <Link to="/registro" className="inline-block p-1 px-md-4 py-md-2 bg-amber-400 text-cyan-900 rounded hover:bg-amber-300">
                    Crear cuenta
                </Link>

                <Link to="/iniciar-sesion" className="ml-4 inline-block p-1 px-md-4 py-md-2 bg-amber-400 text-cyan-900 rounded hover:bg-amber-300">
                    Iniciar Sesión
                </Link>
            </div>
            </div>
        </div>
        </header>
    )
}

export default Header;