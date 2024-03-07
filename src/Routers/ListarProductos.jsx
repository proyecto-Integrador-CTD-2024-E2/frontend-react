import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIconByName } from "../utilities/icons";


const ListarProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchListarProducto = async () => {
      try{
          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:8080/Herramientas', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        if (!response.ok) {
          throw new Error('Error al obtener las Herramientas')
        }
        const responseData = await response.json();
        setProductos(responseData.map((producto) => ({
          id: producto.id,
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          precio: producto.precio,
          categoria: producto.categoria.titulo,
          marca: producto.marca,
          imagenes: producto.imagenes ? producto.imagenes.map((imagen) => imagen.url) : [],
        })));
      
        
      }catch (error) {
        console.log('Error haciendo el fetch:', error);
      }
      
    }
    fetchListarProducto();
  }, []);
    
     

  const handleEdit = (id) => {
    console.log(`Editar producto con id ${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro que queres eliminar este producto?")) {
      try {
        const response = await fetch(
          `http://localhost:8080/Herramientas/${id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        setProductos((prevProductos) =>
          prevProductos.filter((prod) => prod.id !== id)
        );

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
    <table className="table w-full my-4 ml-8">
      <thead className="text-left">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Categoría</th>
          <th scope="col">Marca</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td className="py-2">{producto.id}</td>
            <td className="py-2">{producto.nombre}</td>
            <td className="py-2">{producto.categoria.titulo}</td>
            <td className="py-2">{producto.marca}</td>
            <td className="py-2 flex gap-8">
              <button
                className="bg-colorPrimario hover:bg-colorPrimarioHover transition-all text-white px-2 py-1 rounded-lg"
                onClick={() => handleEdit(producto.id)}
              >
                <FontAwesomeIcon icon={getIconByName("pencil")} size="lg" />
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 transition-all text-white px-2 py-1 rounded-lg"
                onClick={() => handleDelete(producto.id)}
              >
                <FontAwesomeIcon icon={getIconByName("trash")} size="lg" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListarProductos;
