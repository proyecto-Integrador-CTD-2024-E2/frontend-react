import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const  Products = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
        .then((res) => res.json())
        .then((productos) => {
            console.log('Productos', productos)
            setProductos(productos)
        });
    }, []);
    return (
        <div className="d-flex-column align-items-center justify-content-center bg-primary p-1 p-md-5">
            <div className='row justify-content-center g-4'>
                {productos.map(producto => {
                
                return <div key={producto.id} className='col-12 col-md-6 col-lg-6 mb-4 d-flex align-items-stretch'>
                        <ProductCard  producto={producto}/>
                </div> 
                
            })}
            </div>
            
        </div>
    );
};

export default Products ;