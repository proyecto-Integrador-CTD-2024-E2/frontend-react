import { useEffect, useState } from 'react';

const ListarProductos = () => {

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

    const handleEdit = (id) => {
        console.log(`Editar producto con id ${id}`)
    };

    const handleDelete = (id) => {
        
        console.log(`Eliminar producto con id ${id}`);
      };

    return (
       
        <table className="table table-hover table-striped table-bordered  my-0" >
            <thead className="thead-dark" >
                <tr >
                    <th scope="col">Id</th >
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoría</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {productos.map(producto => (
                <tr key={producto.id}>
                    <td>{producto.id}</td>
                    <td>{producto.title}</td>
                    <td>{producto.category.name}</td>
                    <td className='d-flex flex-row justify-content-around'>
                        <button className="btn btn-outline-primary" onClick={() => handleEdit(producto.id)}>
                           ✏️ 
                        </button>
                        <button className="btn btn-outline-danger " onClick={() => handleDelete(producto.id)}>
                            ✖️
                        </button>
                        
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
  
    );
};

export default ListarProductos;