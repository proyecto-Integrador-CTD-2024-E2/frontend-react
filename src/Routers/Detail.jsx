import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIconByName } from "../utilities/icons";
import { useAuth } from '../Context/AuthContext'; 

const Detail = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  const { isLogged, token } = useAuth();
  const location = useLocation();
  const isDetailPage = location.pathname.includes("/detail");
  const col12Classes = isDetailPage ? "col-12 lg:!px-[20em]" : "col-12";

  const caracteristicas = [
    {
      id: 1,
      titulo: 'Electrico',
      icono: 'bucket'
    },
    {
      id: 2,
      titulo: 'Manual',
      icono: 'hammer'
    },
    {
      id: 3,
      titulo: 'Carga rapida',
      icono: 'carBattery'
    }, 
    {
      id: 4,
      titulo: 'Repuestos',
      icono: 'paintBrush'
    },
    {
      id: 5,
      titulo: 'Facil agarre',
      icono: 'trowel'
    },
    {
      id: 6,
      titulo: 'facil Armado',
      icono: 'powerOff'
    }

      
    
]

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        
        const response = await fetch(`http://localhost:8080/Herramientas/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
             //'Authorization': `Bearer ${token}` 
          }
        });
        if (!response.ok) {
          throw new Error('Error al obtener la Herramienta');
        }
        const responseData = await response.json();
        const imagenes = responseData.imagenes ? responseData.imagenes.map((imagen) => imagen.url) : [];
        const productoData = {
          id: responseData.id,
          nombre: responseData.nombre,
          descripcion: responseData.descripcion,
          precio: responseData.precio,
          categoria: responseData.categoria,
          imagenes: imagenes,
          caracteristicas: caracteristicas
        };
        setProducto(productoData);
      } catch (error) {
        console.error('Error haciendo el fetch:', error);
      }
    };
  
    fetchProducto();
  }, [id]);

  if (!producto) return <div className="text-center">Cargando...</div>;

  return (
    <div className={col12Classes}>
      <div className=" px-4 pt-5 justify-between">
        <div className="flex justify-between">
          <Link to="/" className="text-colorPrimario px-4 py-2 rounded">
            <FontAwesomeIcon icon={getIconByName("back")} size="lg" /> Volver
          </Link>
        </div>
      </div>

      <div className="col-12">
        {/* Imagenes */}
        <div className="flex justify-center gap-6 flex-col md:flex-row mb-2 p-4">
          <div
            className="!rounded-l-3xl shadow w-full h-[515px]"
            style={{
              backgroundImage: `url(${producto.imagenes[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="flex flex-col md:flex-row ms-2">
            <div className="w-full relative">
              <div className="md:flex mb-4">
                <div className="md:w-1/2 pr-2">
                  <div className=" w-full p-2 shadow bg-white h-[250px]">
                    <img
                      src={producto.imagenes[1]}
                      className="h-full w-full object-contain"
                      alt={producto.nombre}
                    />
                  </div>
                </div>

                <div className="md:w-1/2 pl-2">
                  <div className="w-full !rounded-tr-3xl  p-2 shadow bg-white h-[250px]">
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
                  <div className="w-full !rounded-br-3xl p-2 shadow bg-white h-[250px]">
                    <img
                      src={producto.imagenes[4]}
                      className="h-full w-full object-contain"
                      alt={producto.nombre}
                    />
                  </div>
                </div>
              </div>
              <button className="flex justify-center items-center gap-2 absolute bottom-6 right-6 border text-black border-black bg-white px-4 py-2 rounded-2xl hover:bg-colorPrimarioHover hover:text-white hover:border-colorPrimarioHover transition-all">
                <FontAwesomeIcon icon={getIconByName("images")} size="lg" />
                <span className="font-semibold">Ver más Imagenes</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between py-12 px-4">
          <div className="col-12 col-lg-6 d-flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <h5 className="font-semibold text-3xl">{producto.nombre}</h5>
              <span className="rounded-full px-4 bg-colorSecundario text-white text-sm">
                {producto.categoria.titulo}
              </span>
            </div>
            <p className="text-lg">{producto.descripcion}</p>
            <p className="font-bold text-2xl text-slate-900 mt-4">
              ${producto.precio}
            </p>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <h5 className="font-semibold text-3xl">Caracteristicas</h5>
            </div>
            <ul>
              {producto.caracteristicas.map((caracteristica) => (
              <li key={caracteristica.id}>
                
                <FontAwesomeIcon icon={getIconByName(caracteristica.icono)} /> 
                <span>{caracteristica.titulo}</span>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
