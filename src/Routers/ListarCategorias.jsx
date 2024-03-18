import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { getIconByName } from "../utilities/icons";
import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";

const ListarCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const { isLogged, token } = useAuth();
  useEffect(() => {
    fetch("http://localhost:8080/Categorias", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization' : `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        
        const categorias = responseData.map((categoria) => ({
          id: categoria.id,
          titulo: categoria.titulo,
          icono: categoria.icono,
        }));

        setCategorias(categorias);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro que queres eliminar esta categoria y los productos asociados a la misma?")) {
      try {
        const response = await fetch(`http://localhost:8080/Categorias/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            'Authorization' : `Bearer ${token}`,
          },

        });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        setCategorias((prevCategorias) =>
          prevCategorias.filter((prod) => prod.id !== id)
        );

        alert("La categoria se eliminó correctamente.");
      } catch (error) {
        console.error("Error:", error.message);
        alert("Hubo un problema al eliminar la categoria.");
      }
    } else {
      alert("Eliminacion cancelada.");
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md w-full rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              titulo
            </th>
            <th scope="col" className="px-6 py-3">
              Icono
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr
              key={categoria.id}
              className={`odd:bg-white even:bg-gray-50 border-b`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {categoria.id}
              </th>
              <td className="px-6 py-4">{categoria.titulo}</td>
              <td className="px-6 py-4 text-cyan-900">
                <FontAwesomeIcon
                  icon={getIconByName(categoria.icono)}
                  size="lg"
                />
              </td>
              <td className="px-6 py-4 flex gap-x-2">
                <Link to={`/admin/categorias/agregar/${categoria.id}`}>
                  <button className="px-4 py-2 bg-colorPrimario text-white rounded hover:bg-colorPrimarioHover">
                    <FontAwesomeIcon icon={getIconByName("pencil")} size="lg" />
                  </button>
                </Link>

                <button
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-400 transition-all"
                  onClick={() => handleDelete(categoria.id)}
                >
                  <FontAwesomeIcon icon={getIconByName("trash")} size="lg" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarCategorias;
