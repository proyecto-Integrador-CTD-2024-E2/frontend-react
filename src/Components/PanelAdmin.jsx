import { Link } from 'react-router-dom';

const PanelAdmin = () => {
    return (
            <nav className='p-3 me-2' style={{backgroundColor: '#114358 ' }}>
                <h5 className="text-white ">
                  Menú
                </h5>
                <ul className="navbar-nav">
                  <li className='nav-item w-100 text-nowrap'>
                    <Link className="nav-link text-white text-decoration-underline" to="/admin/listar">Listar Productos</Link> {/*aqui va un link */}
                  </li>
                  <li className='nav-item w-100 text-nowrap'>
                    <Link className="nav-link text-white text-decoration-underline" to="/admin/agregar">Agregar Producto</Link>  {/*aqui va un link */}
                  </li>
                </ul>
            </nav>
      );
};

export default PanelAdmin;