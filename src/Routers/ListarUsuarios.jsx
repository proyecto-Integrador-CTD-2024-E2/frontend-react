import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";

const ListarUsuarios = () => {
    const [users, setUsers] = useState([]);
    const { isLogged, token } = useAuth();
    useEffect(() => {
        fetch("http://localhost:8080/users", {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }) 
            .then((res) => res.json())
            .then((responseData) => {
                const userList = responseData.map((user) => ({
                    id: user.id,
                    nombre: user.nombre,
                    apellido: user.apellido,
                    rol: user.usuariorole
                }));
                setUsers(userList);
            })
            .catch((error) => {
                console.error('Error al obtener la lista de usuarios:', error);
            });
    }, []);

    const handleChangeRole = (userId, newRole) => {
        
        fetch(`http://localhost:8080/users`, { //preguntar al back como edita el rol de user 
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ role: newRole })
        })
        .then(response => {
            if (response.ok) {
                
                setUsers(prevUsers => prevUsers.map(user => {
                    if (user.id === userId) {
                        return { ...user, rol: newRole };
                    }
                    return user;
                }));
            } else {
                throw new Error('Error al cambiar el rol del usuario');
            }
        })
        .catch(error => {
            console.error('Error al cambiar el rol del usuario:', error);
        });
    };
    {/*const [usuarios, setUsuarios] = useState([
        { id: 1, nombre: 'julian', apellido: 'ospina', rol: { id: 2, nombre: 'Administrador' }},
        { id: 2, nombre: 'santiago', apellido: 'giraldo', rol: { id: 3, nombre: 'Cliente' }},
        { id: 3, nombre: 'doris', apellido: 'montero', rol: { id: 3, nombre: 'Cliente' }},
        { id: 4, nombre: 'mateo', apellido: 'montero', rol: { id: 3, nombre: 'Cliente' }}
    ]);

  const roles = [
    { id: 2, nombre: "Administrador" },
    { id: 3, nombre: "Cliente" },
  ];

    const handleRolChange = (usuarioId, nuevoRolId) => {
        const nuevosUsuarios = usuarios.map(usuario => {
            if (usuario.id === usuarioId) {
                return { ...usuario, rol: roles.find(rol => rol.id === parseInt(nuevoRolId)) };
            }
            return usuario;
        });
        setUsuarios(nuevosUsuarios);
    };*/}

    return (
        <div className="relative overflow-x-auto shadow-md w-full rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">Id</th>
                        <th scope="col" className="px-6 py-3">Nombre</th>
                        <th scope="col" className="px-6 py-3">Apellido</th>
                        <th scope="col" className="px-6 py-3">Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={usuario.id} className={`odd:bg-white even:bg-gray-50 border-b`}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{user.id}</th>
                            <td className="px-6 py-4">{user.nombre}</td>
                            <td className="px-6 py-4">{user.apellido}</td>
                            <td className="px-6 py-4">
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-900 focus:border-amber-400 block w-full p-2.5"
                                    value={user.rol.id}
                                    onChange={(e) => handleChangeRole(user.id, e.target.value)}
                                >
                                    <option value="cliente">Cliente</option>
                                    <option value="admin">Administrador</option>
                                    {/*{roles.map(rol => (
                                        <option key={rol.id} value={rol.id}>
                                            {rol.nombre}
                                    </option>
                                    ))}*/}
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
