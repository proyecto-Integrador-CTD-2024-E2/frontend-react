import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ProductCard = ({ producto }) => {
  return (
    <div className="card h-100 bg-white p-3 p-lg-4 rounded-3 shadow">
      
      <div className="w-100 row align-self-center" style={{ height: '150px' }}>
        <img src={producto.imagenes[1]} className="h-100 w-100" alt={producto.nombre} style={{ objectFit: 'contain' }} />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-dark">{producto.nombre}</h5>
          <span className='badge rounded-pill bg-warning text-dark'>{producto.categoria}</span>
          <p className="fs-6  card-text text-secondary">{producto.descripcion.substring(0, 100)}{producto.descripcion.length > 30 ? '...' : ''}</p>
        </div>
        <h2>
          ${producto.precio}
        </h2>
        <div>
          <Link to={'/detail/' + producto.id} className="btn btn-warning mt-2">Ver Detalles</Link>
        </div>

      </div>
    </div>
  );
};

ProductCard.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    categoria: PropTypes.string.isRequired,
    imagenes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProductCard;
