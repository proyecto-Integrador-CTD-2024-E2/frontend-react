import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';

const Login = () => {

    const { login } = useAuth();
    const [usermail, setUsermail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const userData = {usermail, password};

        fetch ( 'http://localhost:8080/auth/login' ,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify (userData),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }else {
                throw new Error ('Error de autentificacion');
            }
        })
        .then(data =>{
            login(data.token);
        })
    
    }
    
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={usermail}
            onChange={(e) => setUsermail(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 mb-3 focus:outline-none focus:border-indigo-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 mb-3 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    );
};

export default Login;