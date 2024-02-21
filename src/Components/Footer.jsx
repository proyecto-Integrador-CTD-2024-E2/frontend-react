import style from "../Styles/footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={style.footer}>
       <div className={style.footer__container}>
        <div className={style.copywriting}>
          <a href="#" className={style.enlace}>
            <img className={style.logo} src="../../public/logo5.png" alt="" />
          </a>
          <p  className={style.textoCopywriting}>
            ©️ 2024 Tools House.
          </p>
        </div>

        <div className={style.navegation}>
          <Link to="/" className={style.navegation__enlace}></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer