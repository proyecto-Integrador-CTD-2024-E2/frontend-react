import style from "../Styles/footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={style.footer}>
       <div className={style.footer__container}>
        <div className={style.copywriting}>
          <a href="#" className={style.enlace}>
            <img className={style.logo} src="../../public/IMG-20240215-WA0022-removebg-preview.png" alt="" />
          </a>
          <p  className={style.textoCopywriting}>
            ©️ 2024 Tools To h.
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