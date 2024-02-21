import { useState, useEffect } from 'react';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then((res) => res.json())
        .then((categorias) => {
            
            const categoriasApiFake = categorias.map((categoria) => ({
                id: categoria,
                name: categoria,
                image: ['https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'],
            }));
            console.log('categoriasApiFake =>', categoriasApiFake);

            categoriasApiFake[1].image = 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
            setCategories(categoriasApiFake)
            
        });
    }, []);

    return (

    <div className='p-3 rounded-3 mb-4' style={{ backgroundColor: '#AB9680'}}>
        <h2 className='mb-4 text-center text-white'>Categorias</h2>
        <div className="row justify-content-center">
        {categories.map((categoria) => (
            <div key={categoria.id} className='my-2 my-lg-0 col-12 col-md-6 col-lg-3'>
               
               <div className="card h-100 bg-white p-3 p-lg-4 rounded-3 shadow">
                <div className="w-100 row align-self-center" style={{height: '150px'}}>
                <img src={categoria.image} className="h-100 w-100" alt={categoria.name} style={{ objectFit: 'contain'}}/>
                </div>
                <div className='p-2 row-cols-auto align-self-center'>
                    <h5 className='p-2 mb-0 card-title text-center  rounded-pill bg-warning text-dark'>{categoria.name}</h5>
                </div>
                </div> 
             
            </div>
        ))}
        </div>
    </div>
    
);
};

export default Categories;