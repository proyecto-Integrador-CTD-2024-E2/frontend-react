import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIconByName } from '../utilities/icons';

const ListarProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/Herramientas")
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
    console.log(`Editar producto con id ${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro que quieres eliminar este producto?")) {
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
    }
  };

    return (
      <div className="relative overflow-x-auto shadow-md w-full rounded-lg">
           <table className="w-full text-sm text-left text-gray-500" >
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr >
                    <th scope="col" className="px-6 py-3">Id</th >
                    <th scope="col" className="px-6 py-3">Nombre</th>
                    <th scope="col" className="px-6 py-3">Categoría</th>
                    <th scope="col" className="px-6 py-3">Marca</th>
                    <th scope="col" className="px-6 py-3">Opciones</th>

                </tr>
            </thead>
            <tbody className="table-group-divider">
                {productos.map(producto => (
                <tr key={producto.id} className={`odd:bg-white even:bg-gray-50 border-b`}>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{producto.id}</td>
                    <td className="px-6 py-4">{producto.nombre}</td >
                    <td className="px-6 py-4">{producto.categoria}</td >
                    <td className="px-6 py-4">{producto.marca}</td >
                    <td className="px-6 py-4 flex gap-x-2" >
                      <Link to={`/admin/agregar-producto/${producto.id}`}>
                        <button className="px-4 py-2 bg-cyan-900 text-white rounded hover:bg-cyan-800">
                          <FontAwesomeIcon icon={getIconByName('pencil')} size="lg" />
                        </button>
                      </Link>
                       
                        <button className="px-4 py-2 bg-cyan-900 text-white rounded hover:bg-cyan-800" onClick={() => handleDelete(producto.id)}>
                          <FontAwesomeIcon icon={getIconByName('trash')} size="lg" />
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
