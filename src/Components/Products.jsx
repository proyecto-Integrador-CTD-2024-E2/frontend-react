import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
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
      imagenes: producto.imagenes.map((imagen) => imagen.url),
    }));

    // Ejecutar funcion que ordena aleatoriamente los productos en cada recarga antes de setear el estado
    const ordenRandom = getRandomOrder(productosApiFake);
      setProductos(ordenRandom);
    });
}, []);

// funcion que ordena aleatoriamente los productos
const getRandomOrder = (array) => {
    return array.reduce((result, currentValue) => {
        const insertIndex = Math.round(Math.random() * result.length);
        return [].concat([...result.slice(0, insertIndex), currentValue, ...result.slice(insertIndex)]);
    }, []);
};

return (
    <div className="p-3 rounded-3" style={{ backgroundColor: "#AB9680" }}>
      <h2 className="mb-4 text-center text-white">Recomendaciones</h2>
      <div className="row justify-content-center">
      {productos.length ? (
        productos.map((producto) => {
          return (
            <div key={producto.id} className="my-2 col-12 col-md-6">
              <ProductCard producto={producto} />
            </div>
          );
        })
      ) : (
        <div className="text-center">Cargando...</div>
      )}
      </div>
    </div>
  );
};

export default Products;