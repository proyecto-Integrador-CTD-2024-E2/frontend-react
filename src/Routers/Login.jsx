import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    ciudad: "",
    contrasena: "",
  });
  const [errores, setErrores] = useState({});
  const [errorGeneral, setErrorGeneral] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = {};
    if (formulario.nombre.trim().length === 0) {
      erroresValidacion.nombre = "El nombre es requerido";
    }
    if (formulario.apellido.trim().length === 0) {
      erroresValidacion.apellido = "El apellido es requerido";
    }
    if (!formulario.correo.trim()) {
      erroresValidacion.correo = "El correo electrónico es requerido";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formulario.correo)
    ) {
      erroresValidacion.correo = "El correo electrónico ingresado no es válido";
    }
    if (formulario.contrasena.trim().length < 8) {
      erroresValidacion.contrasena =
        "La contraseña debe tener al menos 8 caracteres";
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(formulario.contrasena)
    ) {
      erroresValidacion.contrasena =
        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial";
    }

    if (Object.keys(erroresValidacion).length === 0) {
      // se envia a la base de datos si el usuario completo todos los campos requeridos... FALTA LOGICA
      console.log("Datos del formulario:", formulario);
    } else {
      setErrores(erroresValidacion);
      setErrorGeneral("verifica los campos marcados en rojo.");
    }
  };
  return (
    <div>
      <div className="w-3/4 md:w-1/2 mx-auto my-24 p-6rounded-md ">
        <h2 className="text-2xl font-bold mb-4 text-center">
          <b>Inicia Sesion</b>
        </h2>
        {errorGeneral && <p className="text-red-500 mb-4">{errorGeneral}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="correo"
              className="block text-gray-700 font-semibold mb-2"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formulario.correo}
              onChange={handleChange}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-colorSecundario ${
                errores.correo ? "border-red-500" : ""
              }`}
              required
            />
            {errores.correo && (
              <p className="text-red-500 mt-1">{errores.correo}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="contrasena"
              className="block text-gray-700 font-semibold mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={formulario.contrasena}
              onChange={handleChange}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-colorSecundario ${
                errores.contrasena ? "border-red-500" : ""
              }`}
              required
            />
            {errores.contrasena && (
              <p className="text-red-500 mt-1">{errores.contrasena}</p>
            )}
          </div>

          <div className="grid justify-items-center ">
            <button
              type="submit"
              className="w-full text-white font-semibold px-4 py-2 rounded-md bg-colorPrimario hover:bg-colorPrimarioHover transition duration-300 "
            >
              Iniciar Sesion
            </button>
            <Link
              to="/registro"
              className="px-2 py-1 md:px-4 text-base rounded-full text-colorPrimario underline"
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
