import { Link } from "react-router-dom";

const PanelAdmin = () => {
    return (
      <nav className='p-3 rounded-lg shadow-lg mr-2 bg-cyan-900 text-white text-nowrap '>
        <h5 className="mb-5 text-amber-400">
          Menú
        </h5>
        <ul>
          <li className='my-2'>
            <Link className="text-white" to="/admin/listar-productos">Listar Productos</Link> 
          </li>
          <li className='my-2'>
            <Link className="text-white"  to="/admin/agregar-producto">Agregar Producto</Link>  
          </li>
          <li className='my-2'>
            <Link className="text-white"  to="/admin/listar-usuarios">Lista Usuarios</Link>  
          </li>
          <li className='my-2'>
            <Link className="text-white"  to="/admin/listar-categorias">Listar categorías</Link>  
          </li>
          <li className='my-2'>
            <Link className="text-white"  to="/admin/agregar-categoria">Agregar categoría</Link>  
          </li>
        </ul>
      </nav>
      );
};

export default PanelAdmin;
