import { useState } from "react";

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nombre: "julian",
      apellido: "ospina",
      rol: { id: 2, nombre: "Administrador" },
    },
    {
      id: 2,
      nombre: "santiago",
      apellido: "giraldo",
      rol: { id: 3, nombre: "Cliente" },
    },
    {
      id: 3,
      nombre: "doris",
      apellido: "montero",
      rol: { id: 3, nombre: "Cliente" },
    },
    {
      id: 4,
      nombre: "mateo",
      apellido: "montero",
      rol: { id: 3, nombre: "Cliente" },
    },
  ]);

  const roles = [
    { id: 2, nombre: "Administrador" },
    { id: 3, nombre: "Cliente" },
  ];

  const handleRolChange = (usuarioId, nuevoRolId) => {
    const nuevosUsuarios = usuarios.map((usuario) => {
      if (usuario.id === usuarioId) {
        return {
          ...usuario,
          rol: roles.find((rol) => rol.id === parseInt(nuevoRolId)),
        };
      }
      return usuario;
    });
    setUsuarios(nuevosUsuarios);
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
              Apellido
            </th>
            <th scope="col" className="px-6 py-3">
              Rol
            </th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr
              key={usuario.id}
              className={`odd:bg-white even:bg-gray-50 border-b`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {usuario.id}
              </th>
              <td className="px-6 py-4">{usuario.nombre}</td>
              <td className="px-6 py-4">{usuario.apellido}</td>
              <td className="px-6 py-4">
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-colorSecundario focus:border-colorSecundario block w-full p-2.5"
                  value={usuario.rol.id}
                  onChange={(e) => handleRolChange(usuario.id, e.target.value)}
                >
                  {roles.map((rol) => (
                    <option key={rol.id} value={rol.id}>
                      {rol.nombre}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarUsuarios;
