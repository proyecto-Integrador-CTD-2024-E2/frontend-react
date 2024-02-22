// import { useState, useEffect } from 'react';

const Categories = () => {
    // const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:8080/Herramientas')
    //     .then((res) => res.json())
    //     .then((categorias) => {
    //         const categoriasApiFake = categorias.map((categoria) => ({
    //             id: categoria.id,
    //             name: categoria.nombre,
    //             image: categoria.imagenes[0].url,
    //         }));            
    //         setCategories(categoriasApiFake);
    //     });
    // }, []);

    return (
        <div className='p-3 rounded-3 mb-4' style={{ backgroundColor: '#AB9680'}}>
            <h2 className='mb-4 text-center text-white'>Categorias</h2>
            <div className="row justify-content-center">
                {/* {categories.map((categoria) => (
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
                ))} */}

                <div className='my-2 my-lg-0 col-12 col-md-6 col-lg-3'>
                    <div className="card h-100 bg-white p-3 p-lg-4 rounded-3 shadow">
                            <div className="w-100 row align-self-center" style={{height: '150px'}}>
                                <img src="https://m.media-amazon.com/images/I/81zFH45axiL.jpg" className="h-100 w-100" alt="Construccion" style={{ objectFit: 'contain'}}/>
                            </div>
                            <div className='p-2 row-cols-auto align-self-center'>
                                <h5 className='p-2 mb-0 card-title text-center  rounded-pill bg-warning text-dark'>Construccion</h5>
                            </div>
                    </div> 
                </div>

                <div className='my-2 my-lg-0 col-12 col-md-6 col-lg-3'>
                    <div className="card h-100 bg-white p-3 p-lg-4 rounded-3 shadow">
                            <div className="w-100 row align-self-center" style={{height: '150px'}}>
                                <img src="https://www.incom.mx/img_catalog/SURTEK_130600-PALA_REDONDA_DE_30-F1.webp" className="h-100 w-100" alt="Jardineria" style={{ objectFit: 'contain'}}/>
                            </div>
                            <div className='p-2 row-cols-auto align-self-center'>
                                <h5 className='p-2 mb-0 card-title text-center  rounded-pill bg-warning text-dark'>Jardineria</h5>
                            </div>
                    </div> 
                </div>

                <div className='my-2 my-lg-0 col-12 col-md-6 col-lg-3'>
                    <div className="card h-100 bg-white p-3 p-lg-4 rounded-3 shadow">
                            <div className="w-100 row align-self-center" style={{height: '150px'}}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Water_level_1.jpg" className="h-100 w-100" alt="Hogar" style={{ objectFit: 'contain'}}/>
                            </div>
                            <div className='p-2 row-cols-auto align-self-center'>
                                <h5 className='p-2 mb-0 card-title text-center  rounded-pill bg-warning text-dark'>Hogar</h5>
                            </div>
                    </div> 
                </div>

                <div className='my-2 my-lg-0 col-12 col-md-6 col-lg-3'>
                    <div className="card h-100 bg-white p-3 p-lg-4 rounded-3 shadow">
                            <div className="w-100 row align-self-center" style={{height: '150px'}}>
                                <img src="https://m.media-amazon.com/images/I/81zFH45axiL.jpg" className="h-100 w-100" alt="Construccion" style={{ objectFit: 'contain'}}/>
                            </div>
                            <div className='p-2 row-cols-auto align-self-center'>
                                <h5 className='p-2 mb-0 card-title text-center  rounded-pill bg-warning text-dark'>Sanitario</h5>
                            </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Categories;