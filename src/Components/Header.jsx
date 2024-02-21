
import style from "../Styles/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header_cont}>
           

            <div className={style.contenedor_barra}>

                <Link className={style.logo} to="/">
                    <img
                        className={style.img}
                        src="../../public/logo5.png"
                        alt="logo"
                    />
                </Link>

            </div>

            <div className={style.btn}>
            <Link to="/" className={style.btn1}>Crear cuenta</Link>
            <Link to="/" className={style.btn2}>Iniciar Sesion</Link>
            
            </div>

        </header>

    )
}

export default Header;
