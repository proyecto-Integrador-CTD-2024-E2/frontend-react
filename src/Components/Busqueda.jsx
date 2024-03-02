import style from "../Styles/busqueda.module.css";
// import { Link } from "react-router-dom";

const Busqueda = () => {
  return (
    <form className="mt-[1em]">
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
          className="bg-warning px-4 py-2 rounded-lg font-semibold"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};
export default Busqueda;
