import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const  Products = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
        .then((res) => res.json())
        .then((productos) => {
            
            const productosApiFake = productos.map((producto) => ({
                ...producto,
                images: [producto.image, producto.image, producto.image, producto.image, producto.image],
                category: {
                  id: producto.category,
                  name: producto.category,
                  image: ['https://fakestoreapi.com/img/71-3HjGNDUL.AC_SY879._SX._UX._SY._UY.jpg'],
                }
            }));
            console.log('productosApiFake =>', productosApiFake);
            setProductos(productosApiFake)
        });
    }, []);
    return (

        <div className='p-3 rounded-3' style={{ backgroundColor: '#AB9680'}}>
            <h2 className='mb-4 text-center text-white'>Recomendaciones</h2>
            <div className="row justify-content-center">
                {productos.map(producto => {
            
                return <div key={producto.id} className='my-2 col-12 col-md-6'>
                            <ProductCard  producto={producto}/>
                    </div> 
                })}

            </div>
        </div>
    );
};

export default Products;