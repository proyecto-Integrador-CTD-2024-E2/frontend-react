import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';


const Avatar = () => {

    const [data, setData] = useState(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const navigate = useNavigate()

    // Verificar si data y data.name existen antes de dividir el nombre
    const firstName = data?.name ? data.name.split(' ')[0] : '';
    const lastName = data?.username ? data.username.split(' ')[0] : '';

    // Obtener la primera letra del nombre y del apellido
    const firstLetterFirstName = firstName ? firstName.charAt(0) : '';
    const firstLetterLastName = lastName ? lastName.charAt(0) : '';

    const [token, setToken] = useState(null);

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
                    const response = await fetch('https://jsonplaceholder.typicode.com/users/5', {
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


    // Agregar un evento al documento para cerrar el menú cuando se hace clic fuera de él
    useEffect(() => {
        const handleOutsideClick = (event) => {
            const dropdownButton = document.getElementById("dropdownHoverButton");
            if (dropdownButton && !dropdownButton.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        // Agregar el escuchador de eventos al documento
        document.addEventListener("click", handleOutsideClick);
        // Limpiar el escuchador de eventos cuando el componente se desmonta
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleLogout = () => {
        // Eliminar el token del localStorage
        localStorage.removeItem("token");
        // Redirigir a la página de inicio o a donde desees
        navigate('/');
    };

    return (
        <>
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    id="dropdownHoverButton"
                    data-dropdown-toggle="dropdownHover"
                    data-dropdown-trigger="click"
                    className="focus:outline-none flex flex-row items-center"
                    type="button"
                >
                    <div className="flex flex-row items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10  bg-colorPrimario rounded-full">
                            {data && <span className="font-light text-base text-white ">{firstLetterFirstName + firstLetterLastName}</span>}
                        </div>
                        <div className="font-light text-base text-black">
                            {data && <p>{firstName} {lastName}</p>}
                        </div>
                    </div>
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                        <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                <div id="dropdownHover" className={`z-10 ${isDropdownOpen ? 'absolute' : 'hidden'} right-0 bg-white rounded-lg shadow-md w-full`}>
                    <ul className="" aria-labelledby="dropdownHover">
                      
                        <li>
                            {/* Cambiar la etiqueta 'a' por 'Link' para la opción 'Cerrar sesión' */}
                            <Link to="/login" onClick={handleLogout} className="block px-4 py-2 text-base font-light text-black hover:bg-gray-100 rounded-lg">Cerrar sesión</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Avatar;


