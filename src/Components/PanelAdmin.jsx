import { Link } from "react-router-dom";

const PanelAdmin = () => {
  return (
    <nav className="px-8 py-6 mr-8 bg-sky-900">
      <h5 className="text-white mb-4 ">ADMIN</h5>
      <ul className="navbar-nav">
        <li className="nav-item w-full">
          <Link
            className="nav-link text-white flex items-center gap-1 w-[12em] hover:bg-sky-700 py-2 px-2 rounded-lg"
            to="/admin/listar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-list"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l11 0" />
              <path d="M9 12l11 0" />
              <path d="M9 18l11 0" />
              <path d="M5 6l0 .01" />
              <path d="M5 12l0 .01" />
              <path d="M5 18l0 .01" />
            </svg>
            Lista de Productos
          </Link>{" "}
        </li>
        <li className="nav-item w-full">
          <Link
            className="nav-link text-white flex items-center gap-1 w-[12em] hover:bg-sky-700 py-2 px-2 rounded-lg"
            to="/admin/agregar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-plus"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
            Agregar Producto
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default PanelAdmin;
