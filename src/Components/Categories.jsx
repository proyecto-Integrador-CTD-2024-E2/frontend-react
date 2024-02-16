import React from 'react';

const Categories = () => {
    const categorias = [
        {id: 1, nombre: 'Adhesivos', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyr0fcKTO-S_ozLt3KpOa0dyVTh6R2hEPu5g&usqp=CAU'},
        {id: 2, nombre: 'Adhesivos', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyr0fcKTO-S_ozLt3KpOa0dyVTh6R2hEPu5g&usqp=CAU'},
        {id: 3, nombre: 'Adhesivos', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyr0fcKTO-S_ozLt3KpOa0dyVTh6R2hEPu5g&usqp=CAU'},
        {id: 4, nombre: 'Adhesivos', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyr0fcKTO-S_ozLt3KpOa0dyVTh6R2hEPu5g&usqp=CAU'}
    ]
    return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
        {categorias.map((categoria) => (
            <div key={categoria.id} className='col'>
                <div className='d-flex flex-column h-100'>
                    <div className='card border-dark p-1 mx-auto' style={{ maxWidth: '100px', minWidth: '140px' }} >
                        <img src={categoria.img} className='card-img-top' alt="" />
                        <div className='card-body p-1'>
                            <h5 className='card-title text-center'>{categoria.nombre}</h5>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);
};

export default Categories;