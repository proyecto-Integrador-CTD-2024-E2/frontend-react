import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import style from "../Styles/products.module.css";

const Products = () => {
  const [productos, setProductos] = useState([]);
  const [start, setStart] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/Herramientas");
        if (!response.ok) throw Error("Error loading data");

        const responseData = await response.json();

        const productosApiFake = responseData.map((producto) => ({
          id: producto.id,
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          precio: producto.precio,
          categoria: producto.categoria,
          imagenes: producto.imagenes.map((imagen) => imagen.url),
        }));

        const ordenRandom = getRandomOrder(productosApiFake);
        setProductos(ordenRandom);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  // Randomizar el orden de los productos
  const getRandomOrder = (array) => {
    return array.reduce((result, currentValue) => {
      const insertIndex = Math.round(Math.random() * result.length);
      return [].concat([
        ...result.slice(0, insertIndex),
        currentValue,
        ...result.slice(insertIndex),
      ]);
    }, []);
  };
  // Logica para la paginacion
  useEffect(() => {
    setStart((currentPage - 1) * pageSize);
  }, [currentPage]);
  const handleNextClick = () => {
    setCurrentPage((currentPage) =>
      Math.min(currentPage + 1, Math.ceil(productos.length / pageSize))
    );
  };
  const handlePrevClick = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  return (
    <div className="p-3 rounded-3" style={{ backgroundColor: "#AB9680" }}>
      <div className="row justify-content-center">
        {productos.slice(start, start + pageSize).map((producto) => {
          return (
            <div key={producto.id} className="my-2 col-12 col-md-6">
              <ProductCard producto={producto} />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center align-items-center my-5 gap-2">
        <button
          onClick={() => handlePrevClick()}
          disabled={currentPage === 1}
          className={style.btn}
          style={{ opacity: currentPage === 1 ? 0.6 : 1 }}
        >
          <span aria-hidden="true">&laquo;</span>
        </button>

        <button className={style.btn}>
          <u>{currentPage}</u>
        </button>

        <button
          onClick={() => handleNextClick()}
          disabled={currentPage === Math.ceil(productos.length / pageSize)}
          className={style.btn}
          style={{
            opacity:
              currentPage === Math.ceil(productos.length / pageSize) ? 0.6 : 1,
          }}
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </div>
    </div>
  );
};

export default Products;
