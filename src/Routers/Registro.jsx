import React, { useState } from 'react';

const Resgistro = () => {
    const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        ciudad: '',
        contrasena: ''
    });
    const [errores, setErrores] = useState({});
    const [errorGeneral, setErrorGeneral] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const erroresValidacion = {};
        if (formulario.nombre.trim().length === 0) {
            erroresValidacion.nombre = 'El nombre es requerido';
        }
        if (formulario.apellido.trim().length === 0) {
            erroresValidacion.apellido = 'El apellido es requerido';
        }
        if (!formulario.correo.trim()) {
            erroresValidacion.correo = 'El correo electrónico es requerido';
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formulario.correo)) {
            erroresValidacion.correo = 'El correo electrónico ingresado no es válido';
        }
        if (formulario.contrasena.trim().length < 8) {
            erroresValidacion.contrasena = 'La contraseña debe tener al menos 8 caracteres';
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(formulario.contrasena)) {
            erroresValidacion.contrasena = 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial';
        }

        if (Object.keys(erroresValidacion).length === 0) {
            fetch ('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Contect-Type' : 'application/json',
                },
                body: JSON.stringify(formulario),
            })
            .catch(error => {
                console.log('Error al registrar al usuario:' , error);
                setErrorGeneral('Hubo un error al registar al usuario')
            })
            console.log('Datos del formulario:', formulario);
        } else {
            setErrores(erroresValidacion);
            setErrorGeneral('verifica los campos marcados en rojo.');
        }
    }
    return (
        <div className='flex flex-col md:flex-row'>
            <div className="md:w-1/2 ">
                <img 
                src='https://media.istockphoto.com/id/119479420/es/foto/en-construcci%C3%B3n.jpg?s=612x612&w=0&k=20&c=ER3-UaQV7AJ2evNr7_KQw5RElC8mPVgSjqch4Fi1Aro=' 
                alt="Imagen de Registro" 
                className="hidden md:block w-full h-full object-cover" />
            </div>

            <div className="md:w-1/2 p-6 bg-gray-100 shadow-md rounded-md " >
                <h2 className="text-2xl font-bold mb-4 text-center">Registrate</h2>
                {errorGeneral && <p className="text-red-500 mb-4">{errorGeneral}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formulario.nombre}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400 ${errores.nombre ? 'border-red-500' : ''}`}
                            required
                        />
                        {errores.nombre && <p className="text-red-500 mt-1">{errores.nombre}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="apellido" className="block text-gray-700 font-semibold mb-2">Apellido</label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            value={formulario.apellido}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400 ${errores.apellido ? 'border-red-500' : ''}`}
                            required
                        />
                        {errores.apellido && <p className="text-red-500 mt-1">{errores.apellido}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="correo" className="block text-gray-700 font-semibold mb-2">Correo Electrónico</label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={formulario.correo}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400 ${errores.correo ? 'border-red-500' : ''}`}
                            required
                        />
                        {errores.correo && <p className="text-red-500 mt-1">{errores.correo}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ciudad" className="block text-gray-700 font-semibold mb-2">Ciudad</label>
                        <input
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            value={formulario.ciudad}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                        />
                    </div>
                                        <div className="mb-4">
                        <label htmlFor="contrasena" className="block text-gray-700 font-semibold mb-2">Contraseña</label>
                        <input
                            type="password"
                            id="contrasena"
                            name="contrasena"
                            value={formulario.contrasena}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400 ${errores.contrasena ? 'border-red-500' : ''}`}
                            required
                        />
                        {errores.contrasena && <p className="text-red-500 mt-1">{errores.contrasena}</p>}
                    </div>

                    <div className='grid justify-items-center '>
                        <button type="submit" className="  text-white font-semibold px-4 py-2 rounded-md bg-cyan-900 hover:bg-indigo-600 transition duration-300 " style={{backgroundColor: ' #114358'}}>Registrarse</button>
                    </div>
                    
                </form>
            </div>
        </div>
                    
           
    );
};

export default Resgistro;