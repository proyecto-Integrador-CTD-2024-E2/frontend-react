import React from 'react';
import Busqueda from "../Components/Busqueda"
import style from "../Styles/home.module.css"
import Products from '../Components/Products';
import Categories from '../Components/Categories';


const Home = () => {
    return (
        <div>
             <div className={style.busqueda}><Busqueda/></div>
             <div className='p-2 p-md-3 p-lg-4'>
           
            <Categories/>
            <Products/>

            
        </div>

        </div>
        
    );
};

export default Home;