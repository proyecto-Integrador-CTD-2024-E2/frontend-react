import style from "../Styles/busqueda.module.css";
import { Link } from "react-router-dom";

const Busqueda= () => {
return (
    <form className={style.searchButton}>
            <div className={style.searchButton__container}>
                <input
                    type="search"
                    id="default-search"
                    className={style.searchButton__input}
                    placeholder="Que estas buscando?"
                    required
                />
                <button
                    type="submit"
                    className={style.searchButton__buttton}
                    
                >Buscar</button >
                </div>
                </form> 

)

}

export default Busqueda;
