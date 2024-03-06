import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/Herramientas/${id}`)
      .then((res) => res.json())
      .then((responseData) => {
        const productoData = {
          id: responseData.id,
          nombre: responseData.nombre,
          descripcion: responseData.descripcion,
          precio: responseData.precio,
          categoria: responseData.categoria,
          imagenes: responseData.imagenes.map((imagen) => imagen.url),
        };

        setProducto(productoData);
      })
      .catch((error) => console.error("Error haciendo el fetch:", error));
  }, [id]);

  if (!producto) return <div className="text-center">Cargando...</div>;

  return (
    <div className="col-12">
      <div className=" px-4 pt-5 justify-between">
        <div className="flex justify-between">
          <Link
            to="/"
            className="text-colorPrimario underline px-4 py-2 rounded"
          >
            <i className="bi bi-arrow-left"></i> Volver
          </Link>
          <button className="border-2 text-colorPrimario border-colorPrimario  px-4 py-2 rounded-2xl hover:bg-colorPrimarioHover hover:text-white hover:border-colorPrimarioHover transition-all">
            Ver más Imagenes
          </button>
        </div>
      </div>
      <div className="col-12">
        <div className="flex justify-center gap-6 flex-col md:flex-row mb-2 p-4">
          <div className="mb-4 flex">
            <div className="w-full rounded-tl-md p-2 shadow-md bg-white h-[515px]">
              <img
                src={producto.imagenes[0]}
                className="h-full w-full object-contain"
                alt={producto.nombre}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row ms-2">
            <div className="w-full">
              <div className="md:flex mb-4">
                <div className="md:w-1/2 pr-2">
                  <div className="w-full p-2 shadow bg-white h-[250px]">
                    <img
                      src={producto.imagenes[1]}
                      className="h-full w-full object-contain"
                      alt={producto.nombre}
                    />
                  </div>
                </div>

                <div className="md:w-1/2 pl-2">
                  <div className="w-full rounded-tr-md p-2 shadow bg-white h-[250px]">
                    <img
                      src={producto.imagenes[2]}
                      className="h-full w-full object-contain"
                      alt={producto.nombre}
                    />
                  </div>
                </div>
              </div>

              <div className="md:flex">
                <div className="md:w-1/2 pr-2">
                  <div className="w-full p-2 shadow bg-white h-[250px]">
                    <img
                      src={producto.imagenes[3]}
                      className="h-full w-full object-contain"
                      alt={producto.nombre}
                    />
                  </div>
                </div>

                <div className="md:w-1/2 pl-2">
                  <div className="w-full rounded-br-md p-2 shadow bg-white h-[250px]">
                    <img
                      src={producto.imagenes[4]}
                      className="h-full w-full object-contain"
                      alt={producto.nombre}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 px-4 rounded-3">
          <div className="col-12 col-lg-6 d-flex flex-col justify-center">
            <div className="px-4">
              <div className="flex items-center gap-2">
                <h5 className="font-semibold text-xl">{producto.nombre}</h5>
                <span className="rounded-full px-4 bg-colorSecundario text-white text-sm">
                  {producto.categoria}
                </span>
              </div>
              <p className="text-dark">{producto.descripcion}</p>
              <p className="font-bold text-2xl text-slate-900">
                <b>${producto.precio}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
