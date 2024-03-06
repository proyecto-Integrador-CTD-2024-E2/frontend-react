import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIconByName } from "../utilities/icons";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [usermail, setUsermail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const userData = { usermail, password };
    login({
      token: "dfdnheisfjselkd",
      nombre: "leydi",
      apellido: "montero",
      email: "ejemplo@yohoo.com",
      ciuidad: "mosquera",
    });
    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error de autentificacion");
        }
      })
      .then((data) => {
        login({
          token: data.token,
          nombre: "leydi",
          apellido: "montero",
          email: "ejemplo@yohoo.com",
          ciuidad: "mosquera",
        });
      });
  };

  return (
    <div className="flex flex-col md:flex-row mt-4">
      <div className="md:w-1/2">
        <img
          src="https://media.istockphoto.com/id/119479420/es/foto/en-construcci%C3%B3n.jpg?s=612x612&w=0&k=20&c=ER3-UaQV7AJ2evNr7_KQw5RElC8mPVgSjqch4Fi1Aro="
          alt="Imagen de Registro"
          className="hidden md:block w-full h-full object-cover rounded-r-3xl"
        />
      </div>

      <div className="md:w-1/2 px-16 my-auto">
        <div className="flex items-center justify-center mb-8">
          <FontAwesomeIcon
            className="text-6xl text-colorPrimario"
            icon={getIconByName("circleUser")}
          />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">
          <b>Inicia Sesion</b>
        </h2>
        <form className="space-y-4 ">
          <div className="mb-6">
            <label
              htmlFor="correo"
              className="block text-gray-700 font-semibold mb-2"
            >
              Correo
            </label>
            <input
              type="text"
              id="correo"
              placeholder="Correo"
              value={usermail}
              onChange={(e) => setUsermail(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-colorSecundario"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-colorSecundario"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-colorPrimario text-white font-semibold py-2 px-4 rounded hover:bg-colorSecundario focus:outline-none focus:bg-colorSecundario transition-all"
            >
              Iniciar Sesión
            </button>
            <Link
              to="/registro"
              className="w-full block px-2 py-1 md:px-4 text-base text-center rounded-full text-colorPrimario underline"
            >
              No tenes una cuenta? Registrate
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
