import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIconByName } from "../utilities/icons";

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
    return;
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
    <div className="min-h-screen flex justify-center items-center bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <FontAwesomeIcon
            className="text-6xl text-cyan-900"
            icon={getIconByName("circleUser")}
          />
        </div>
        <form className="space-y-4 ">
          <div>
            <input
              type="text"
              placeholder="Correo"
              value={usermail}
              onChange={(e) => setUsermail(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-amber-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-amber-400"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-cyan-900 text-white font-semibold py-2 px-4 rounded hover:bg-amber-400 focus:outline-none focus:bg-amber-500"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
