import React from 'react';
import { Link } from 'react-router-dom';


const PanelAdmi = () => {
    return (
        <div className="container-fluid">
          <div className="row">
            
            <nav className="col-md-3 col-lg-2 d-md-block sidebar "style={{ height: '100vh', backgroundColor: '#7E634E' }}>
              <div className="sidebar-sticky">
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-white">
                  Menú
                </h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link text-white text-decoration-underline" to="/listar">Listar Productos</Link> {/*aqui va un link */}
                  </li>
                  <li className="nav-item">
                    <h2 className="nav-link text-white text-decoration-underline" to="/Admi/users">Agregar Productos</h2>  {/*aqui va un link */}
                  </li>
                  
                </ul>
              </div>
            </nav>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                
             </main>
            
          </div>
        </div>
      );
};

export default PanelAdmi;