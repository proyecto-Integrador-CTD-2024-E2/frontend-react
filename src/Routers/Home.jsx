import React from 'react';
import Products from '../Components/Products';
import Categories from '../Components/Categories';

const Home = () => {
    return (
        <div>
            <h3 className='text-center'>Categorias</h3>
            <Categories/>
            <h3 className='text-center'>Recomendaciones</h3>
            <Products/>
        </div>
    );
};

export default Home;