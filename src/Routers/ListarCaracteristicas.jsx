import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIconByName } from "../utilities/icons";
// import { useEffect, useState } from 'react';

const ListarCaracteristicas = () => {
  {
    /*const [ caracteristicas , setCaracteristicas ] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/Caracteristicas")
      .then((res) => res.json())
      .then((responseData) => {
        const caracteristicas = responseData.map((caracteristica) => ({
          id: caracteristica.id,
          nombre: caracteristica.titulo,
          icono: caracteristica.icono
        }));

        setCaracteristicas(caracteristicas);
      });
  }, []);*/
  }

  const caracteristicas = [
    {
      id: 1,
      nombre: "jardin",
      icono: "map",
    },
    {
      id: 2,
      nombre: " hogar",
      icono: "pencil",
    },
    {
      id: 3,
      nombre: "exterior",
      icono: "plug",
    },
  ];
  const handleDelete = (id) => {
    console.log(`Eliminar Caracteristica con id ${id}`);
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
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Icono
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {caracteristicas.map((caracteristica) => (
            <tr
              key={caracteristica.id}
              className={`odd:bg-white even:bg-gray-50 border-b`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {caracteristica.id}
              </th>
              <td className="px-6 py-4">{caracteristica.nombre}</td>
              <td className="px-6 py-4 text-colorPrimario">
                <FontAwesomeIcon
                  icon={getIconByName(caracteristica.icono)}
                  size="lg"
                />
              </td>
              <td className="px-6 py-4 flex gap-x-2">
                <Link
                  to={`/admin/caracteristicas/agregar/${caracteristica.id}`}
                >
                  <button className="px-4 py-2 bg-colorPrimario text-white rounded hover:bg-colorPrimarioHover">
                    <FontAwesomeIcon icon={getIconByName("pencil")} size="lg" />
                  </button>
                </Link>

                <button
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-400"
                  onClick={() => handleDelete(caracteristica.id)}
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

export default ListarCaracteristicas;
