import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Detail = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/Herramientas/${id}`)
      .then((res) => res.json())
      .then((responseData) => {
        const productoData = {
          id: responseData.id,
          nombre: responseData.nombre,
          descripcion: responseData.descripcion,
          precio: responseData.precio,
          categoria: responseData.categoria,
          imagenes: responseData.imagenes.map((imagen) => imagen.url),
        };
  
        setProducto(productoData);
      })
      .catch((error) => console.error("Error haciendo el fetch:", error));
  }, [id]);

  if (!producto) return <div>Cargando...</div>;
  
  return (
    <div className="col-12">
      <div className='d-flex px-4 pt-5 justify-content-between align-self-start' style={{ backgroundColor: '#AB9680'}}>
        <div className='d-flex'>
          <Link to="/" className="btn btn-light ">
              <i className="bi bi-arrow-left"></i> Volver
          </Link>
        </div>
      </div>
      <div className='col-12'>
   
        <div className='d-flex flex-column flex-md-row mb-2 p-4' style={{ backgroundColor: '#AB9680'}}>
          <div className='mb-4 mb-md-0 flex-fill me-2'>
            <div className="w-100 rounded-start-3 p-2 shadow bg-white" style={{height: '325px'}}>
                  <img src={producto.imagenes[0]} className="h-100 w-100" alt={producto.nombre} style={{ objectFit: 'contain'}}/>
            </div>
          </div>

          <div className='flex-fill ms-2'>
            <div className='row mb-4'>
              <div className='col-6'>
                <div className="w-100 p-2 shadow bg-white" style={{height: '150px'}}>
                      <img src={producto.imagenes[1]} className="h-100 w-100" alt={producto.nombre} style={{ objectFit: 'contain'}}/>
                </div>
              </div>

              <div className='col-6'>
                <div className="w-100 rounded-end-3 p-2 shadow bg-white" style={{height: '150px'}}>
                      <img src={producto.imagenes[2]} className="h-100 w-100" alt={producto.nombre} style={{ objectFit: 'contain'}}/>
                </div>
              </div>
            
            </div>

            <div className='row'>
              <div className='col-6'>
                <div className="w-100  p-2 shadow bg-white" style={{height: '150px'}}>
                      <img src={producto.imagenes[3]} className="h-100 w-100" alt={producto.nombre} style={{ objectFit: 'contain'}}/>
                </div>
              </div>

              <div className='col-6'>
                <div className="w-100 rounded-end-3 p-2 shadow bg-white" style={{height: '150px'}}>
                      <img src={producto.imagenes[4]} className="h-100 w-100" alt={producto.nombre} style={{ objectFit: 'contain'}}/>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-end mt-2 mb-4 px-4'>
          <button className='btn btn-primary' style={{backgroundColor:'#F2AA1F', border: 'none'}}>Ver más</button>
        </div>
          </div>

          
        </div>

        <div className='p-3 rounded-3' >
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <div className="px-4">
                <div className='d-flex align-items-center '>
                  <h4 className='mb-1'>
                    {producto.nombre}
                  </h4>
                  <span className="badge rounded-pill bg-warning text-dark mx-2">{producto.categoria}</span>
                </div>
                <p className=" text-dark">{producto.descripcion}</p>
                <p className="fs-2 text-dark"><b>${producto.precio}</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;