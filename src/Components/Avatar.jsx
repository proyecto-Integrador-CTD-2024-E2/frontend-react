import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Avatar = () => {
    const [data, setData] = useState(null);
    const [token, setToken] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        // Aquí tomamos el token que está almacenado en localStorage
        const storedToken = localStorage.getItem('token');

        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (token) {
                    const response = await fetch(`http://localhost:8080/user`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    if (!response.ok) {
                        throw new Error(`Error fetching user data: ${response.status}`);
                    }

                    const responseData = await response.json();
                    setData(responseData);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [token]);

    // Verificar si data y data.name existen antes de dividir el nombre
    const firstName = data?.name ? data.name.split(' ')[0] : '';
    const lastName = data?.username ? data.username.split(' ')[0] : '';

    // Obtener la primera letra del nombre y del apellido
    const firstLetterFirstName = firstName ? firstName.charAt(0) : '';
    const firstLetterLastName = lastName ? lastName.charAt(0) : '';

    const handleLogout = () => {
        // Eliminar el token del localStorage
        localStorage.removeItem("token");
        // Redirigir a la página de inicio o a donde desees
        navigate('/');
    };

    return (
        <>
            <div className="flex items-center flex-row gap-4">
                <div className="flex items-center justify-center w-10 h-10  bg-[#01A9D6] rounded-full">
                    <span className="font-light text-base text-white ">{firstLetterFirstName + firstLetterLastName}</span>
                </div>
                <div className="flex flex-col items-start gap-0">
                    <h1 className="text-base font-medium text-black">{firstName} {lastName}</h1>
                    <button onClick={handleLogout} className="text-sm text-gray-500">Cerrar sesión</button>
                </div>
            </div>
        </>
    );
};

export default Avatar;
