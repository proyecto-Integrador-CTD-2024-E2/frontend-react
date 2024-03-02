import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ListarProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8080/Herramientas')
      .then((res) => res.json())
      .then((responseData) => {
  
        const productosApiFake = responseData.map((producto) => ({
            id: producto.id,
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            categoria: producto.categoria,
            marca: producto.marca,
            imagenes: producto.imagenes.map((imagen) => imagen.url),
        }));

        setProductos(productosApiFake);

        });
    }, []);

    const handleEdit = (id) => {
   
      
        
    };

    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro que queres eliminar este producto?")) {
          try {
            const response = await fetch(`http://localhost:8080/Herramientas/${id}`, {
              method: "DELETE",
            });
            
            if (!response.ok) {
              throw new Error(`HTTP error: ${response.status}`);
            }
      
            setProductos((prevProductos) => prevProductos.filter((prod) => prod.id !== id));
      
            alert("El producto se eliminó correctamente.");
          } catch (error) {
            console.error("Error:", error.message);
            alert("Hubo un problema al eliminar el producto.");
          }
        } else {
          alert("Eliminacion cancelada.");
        }
      };

    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
           <table className="w-full text-sm text-left text-gray-500" >
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr >
                    <th scope="col" className="px-6 py-3">Id</th >
                    <th scope="col" className="px-6 py-3">Nombre</th>
                    <th scope="col" className="px-6 py-3">Categoría</th>
                    <th scope="col" className="px-6 py-3">Marca</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {productos.map(producto => (
                <tr key={producto.id} className={`odd:bg-white even:bg-gray-50 border-b`}>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{producto.id}</td>
                    <td className="px-6 py-4">{producto.nombre}</td >
                    <td className="px-6 py-4">{producto.categoria}</td >
                    <td className="px-6 py-4">{producto.marca}</td >
                    <td className="px-6 py-4" >
                      <Link to={`/admin/agregar/${producto.id}`}>
                        <button className="btn btn-outline-primary" onClick={() => handleEdit(producto.id)}>
                            <i className="bi bi-pencil-square"></i>
                        </button>
                      </Link>
                       
                        <button className="btn btn-outline-danger " onClick={() => handleDelete(producto.id)}>
                            <i className="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
       
    );
};

export default ListarProductos;