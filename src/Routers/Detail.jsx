import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  console.log('idendificador'+id)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((producto) => {
        console.log('producto', producto)
        setProducto(producto)
        console.log(id)
    });
  }, [id]);

  if (!producto) return <div>Cargando...</div>;
  
  return (
    <div className="vh-100 vw-100 d-flex align-items-center justify-content-center  p-1 p-md-5" style={{overflow: 'auto'}}> {/* Fondo de pantalla completa, centrado con un color primario y habilita el desplazamiento si es necesario */}
        <div className="row g-0 flex-grow-1">
            <div className="col-lg-6 d-flex align-items-center justify-content-center bg-white p-4 rounded" style={{maxHeight: '90vh'}}>
                <img src={producto.image} alt={producto.title} className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} /> {/* Imagen responsiva y ajustada al viewport sin desbordarse */}
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="px-4">
                <h1 className="fs-1 text-dark">{producto.title}</h1>
                <span className="badge rounded-pill bg-warning text-dark">{producto.category}</span>
                <p className="fs-4 text-dark">{producto.description}</p>
                <p className="fs-2 text-dark">${producto.price}</p>
                <button className="btn btn-primary btn-lg">Ver</button>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Detail;