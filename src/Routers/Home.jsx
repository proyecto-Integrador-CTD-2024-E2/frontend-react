import React from 'react';
import Busqueda from "../Components/Busqueda"
import style from "../Styles/home.module.css"

const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.busqueda}><Busqueda/></div>
            
        </div>
    );
};

export default Home;