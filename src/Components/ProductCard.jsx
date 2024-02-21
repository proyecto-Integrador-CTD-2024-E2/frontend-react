import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductCard = ({producto}) => {
    
    ProductCard.propTypes = {
        producto: PropTypes.object.isRequired
    };
    
    return (


        <div className="card h-100 bg-white p-3 p-lg-4 rounded-3 shadow">
            <div className="w-100 row align-self-center" style={{height: '150px'}}>
                <img src={producto.images[0]} className="h-100 w-100" alt={producto.title} style={{ objectFit: 'contain'}}/>
            </div>
            
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title text-dark">{producto.title}</h5>
                    <span className='badge rounded-pill bg-warning text-dark'>{producto.category.name}</span>
                    <p className="fs-6  card-text text-secondary">{producto.description.substring(0, 100)}{producto.description.length > 30 ? '...' : ''}</p>
                </div>
                <h2>
                    ${producto.price}
                </h2>
                <div>
                <Link to={'/detail/'+producto.id} className="btn btn-warning mt-2">Ver Detalles</Link>
                </div>
                
            </div>
        </div>
    );
};

export default ProductCard;