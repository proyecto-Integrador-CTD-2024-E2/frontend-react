import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Detail = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  console.log('idendificador'+id)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((producto) => {
        const productoApiFake = {
          ...producto,
          images: [producto.image, producto.image, producto.image, producto.image, producto.image],
          category: {
            id: producto.category,
            name: producto.category,
            image: ['https://fakestoreapi.com/img/71-3HjGNDUL.AC_SY879._SX._UX._SY._UY.jpg'],
          }
        }
        console.log('productoApiFake =>', productoApiFake);
        setProducto(productoApiFake);
    });
  }, [id]);

  if (!producto) return <div>Cargando...</div>;
  
  return (
    <div className="col-12">
      <div className='d-flex p-4 justify-content-between align-self-start'>
        <h4 className='mb-0'>
          {producto.title}
        </h4>
        <div className='d-flex'>
          <Link to="/" className="btn btn-light ">⬅ Atras</Link>
        </div>
      </div>
      <div className='col-12'>
   

        <div className='d-flex flex-column flex-md-row mb-2 p-4' style={{ backgroundColor: '#C7B69F'}}>
          <div className='mb-4 mb-md-0 flex-fill me-2'>
            <div className="w-100 rounded-start-3 p-2 shadow bg-white" style={{height: '325px'}}>
                  <img src={producto.images[0]} className="h-100 w-100" alt={producto.name} style={{ objectFit: 'contain'}}/>
            </div>
          </div>

          <div className='flex-fill ms-2'>
            <div className='row mb-4'>
              <div className='col-6'>
                <div className="w-100 p-2 shadow bg-white" style={{height: '150px'}}>
                      <img src={producto.images[1]} className="h-100 w-100" alt={producto.name} style={{ objectFit: 'contain'}}/>
                </div>
              </div>

              <div className='col-6'>
                <div className="w-100 rounded-end-3 p-2 shadow bg-white" style={{height: '150px'}}>
                      <img src={producto.images[2]} className="h-100 w-100" alt={producto.name} style={{ objectFit: 'contain'}}/>
                </div>
              </div>
            
            </div>

            <div className='row'>
              <div className='col-6'>
                <div className="w-100  p-2 shadow bg-white" style={{height: '150px'}}>
                      <img src={producto.images[3]} className="h-100 w-100" alt={producto.name} style={{ objectFit: 'contain'}}/>
                </div>
              </div>

              <div className='col-6'>
                <div className="w-100 rounded-end-3 p-2 shadow bg-white" style={{height: '150px'}}>
                      <img src={producto.images[4]} className="h-100 w-100" alt={producto.name} style={{ objectFit: 'contain'}}/>
                </div>
              </div>
            
            </div>


          </div>

        </div>

        <div className='d-flex justify-content-end mt-2 mb-4 px-4'>
          <button className='btn btn-primary'>Ver más</button>
        </div>
        <div className='p-3 rounded-3' >
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <div className="px-4">
                <span className="badge rounded-pill bg-warning text-dark mb-2">{producto.category?.name}</span>
                <p className=" text-dark">{producto.description}</p>
                <p className="fs-2 text-dark">${producto.price}</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Detail;