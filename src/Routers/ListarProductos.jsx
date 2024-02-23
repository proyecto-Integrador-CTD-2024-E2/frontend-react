import { useEffect, useState } from 'react';

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
        console.log(`Editar producto con id ${id}`)
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
        <table className="table table-hover table-striped table-bordered  my-0" >
            <thead className="thead-dark" >
                <tr >
                    <th scope="col">Id</th >
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Marca</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {productos.map(producto => (
                <tr key={producto.id}>
                    <td>{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.categoria}</td>
                    <td>{producto.marca}</td>
                    <td className='d-flex flex-row justify-content-around'>
                        <button className="btn btn-outline-primary" onClick={() => handleEdit(producto.id)}>
                            <i className="bi bi-pencil-square"></i>
                        </button>
                        <button className="btn btn-outline-danger " onClick={() => handleDelete(producto.id)}>
                            <i className="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListarProductos;