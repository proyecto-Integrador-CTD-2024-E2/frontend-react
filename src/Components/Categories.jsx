import { useState, useEffect } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/Herramientas")
      .then((res) => res.json())
      .then((categorias) => {
        const categoriasApiFake = categorias.map((categoria) => ({
          id: categoria.id,
          name: categoria.nombre,
        }));
        setCategories(categoriasApiFake);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full flex justify-between mb-6">
      {categories.map((category) => (
        // TODO: Falta pasar en vez de imagen de categoria, icono de categoria.

        <p key={category.id}>{/* <p>{category.name}</p> */}</p>
      ))}
    </div>
  );
};

export default Categories;