import { Link, useMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIconByName } from "../utilities/icons";

const PanelAdmin = () => {
  const isListarProductosActive = useMatch("/admin/productos/listar/*");
  const isAgregarProductoActive = useMatch("/admin/productos/agregar/*");
  const isListarUsuariosActive = useMatch("/admin/usuarios/listar/*");
  const isListarCategoriasActive = useMatch("/admin/categorias/listar/*");
  const isAgregarCategoriasActive = useMatch("/admin/categorias/agregar/*");

  return (
    <nav className="p-8 shadow-lg mr-2 bg-sky-900 text-white text-nowrap">
      <h5 className="mb-5 text-amber-400">Menu Admin</h5>
      <ul>
        <li className="my-4">
          <Link
            className={`text-white hover:bg-sky-950 px-6 py-2 rounded-xl transition-all ${
              isListarProductosActive ? "bg-sky-950" : ""
            }`}
            to="/admin/productos/listar"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={getIconByName("list")}
              size="sm"
            />
            Listar Productos
          </Link>
        </li>
        <li className="my-4">
          <Link
            className={`text-white hover:bg-sky-950 px-6 py-2 rounded-xl transition-all ${
              isAgregarProductoActive ? "bg-sky-950" : ""
            }`}
            to="/admin/productos/agregar"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={getIconByName("plus")}
              size="sm"
            />
            Agregar Producto
          </Link>
        </li>
        <li className="my-4">
          <Link
            className={`text-white hover:bg-sky-950 px-6 py-2 rounded-xl transition-all ${
              isListarUsuariosActive ? "bg-sky-950" : ""
            }`}
            to="/admin/usuarios/listar"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={getIconByName("user")}
              size="sm"
            />
            Lista Usuarios
          </Link>
        </li>
        <li className="my-4">
          <Link
            className={`text-white hover:bg-sky-950 px-6 py-2 rounded-xl transition-all ${
              isListarCategoriasActive ? "bg-sky-950" : ""
            }`}
            to="/admin/categorias/listar"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={getIconByName("tableList")}
              size="sm"
            />
            Listar categorías
          </Link>
        </li>
        <li className="my-4">
          <Link
            className={`text-white hover:bg-sky-950 px-6 py-2 rounded-xl transition-all ${
              isAgregarCategoriasActive ? "bg-sky-950" : ""
            }`}
            to="/admin/categorias/agregar"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={getIconByName("plus")}
              size="sm"
            />
            Agregar categoría
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PanelAdmin;
