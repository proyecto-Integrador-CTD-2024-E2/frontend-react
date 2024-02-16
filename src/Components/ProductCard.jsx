import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductCard = ({producto}) => {
    ProductCard.propTypes = {
        producto: PropTypes.object.isRequired
    };
    
    return (
        <div className="card bg-white p-4 rounded overflow-hidde " style={{maxHeight: '70vh', maxWidth: '300px'}}>
            <img src={producto.image} className="card-img-top" alt={producto.title} style={{maxHeight: '40%', objectFit: 'contain'}}/>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title text-primary">{producto.title}</h5>
                    <span className='badge rounded-pill bg-warning text-dark'>{producto.category}</span>
                    <p className="card-text text-secondary">{producto.description}</p>
                </div>
                <h2>
                    ${producto.price}
                </h2>
                <Link to={'/detail/'} className="btn btn-primary mt-2">Ver Detalles</Link>
            </div>
        </div>
    );
};

export default ProductCard;