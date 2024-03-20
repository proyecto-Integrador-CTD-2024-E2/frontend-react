import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIconByName } from "../utilities/icons";
import Politicas from "../Components/Politicas";
import Reseñas from "../Components/Reseñas";
import StarRating from "../Components/StarRating";
// import { useAuth } from "../Context/AuthContext";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const Detail = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  // const { isLogged, token } = useAuth();
  const location = useLocation();
  const isDetailPage = location.pathname.includes("/detail");
  const col12Classes = isDetailPage ? "col-12 lg:!px-[18em] " : "col-12";
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date()); // Por defecto empieza en el día de hoy
  const [endDate, setEndDate] = useState(null);
  const [blockedDates, setBlockedDates] = useState([]);
  
  
  
const generateBlockedDates = (inicioReserva, finReserva) => {
  const datesInRange = [];
  const currentDate = new Date(inicioReserva);
  const endDate = new Date(finReserva);
  endDate.setDate(endDate.getDate() + 1);
  while (currentDate < endDate) {
    datesInRange.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return datesInRange;
};

  
 const handleStartDateChange = (date) => {
  setStartDate(date);
  if (endDate && endDate.getTime() < date.getTime()) {
    setEndDate(null);
  }
  
  if (blockedDates.length > 0 && date < blockedDates[0]) {
    let lastValidDate = new Date(blockedDates[0]);
    lastValidDate.setDate(lastValidDate.getDate() - 1);
    if (lastValidDate < date) {
      setEndDate(lastValidDate);
    } else {
      setEndDate(null);
    }
    }
    };
  
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  

  const openPolicy = () => {
    setIsPolicyOpen(true)
  }
  const closePolicy = () => {
    setIsPolicyOpen(false)
  }


  const caracteristicas = [
    { id: 1, titulo: "Electrico", icono: "bucket",},
    {id: 2, titulo: "Manual",icono: "hammer",},
    { id: 3, titulo: "Carga rapida",icono: "carBattery",},
    {id: 4,titulo: "Repuestos",icono: "paintBrush",},
    { id: 5, titulo: "Facil agarre",icono: "trowel",},
    {id: 6, titulo: "facil Armado",icono: "powerOff",},
  ];

  const reseñas = [
    { id: 1, usuario: 'Freddie Mercury', puntuacion: 4, comentario: 'Buena experiencia, producto de calidad.' },
    { id:2, usuario: 'Shakira', puntuacion: 5, comentario: '¡Excelente servicio al cliente y envío rápido!' },
    { id:3, usuario: 'Gustavo Cerati', puntuacion: 3, comentario: 'El producto llegó tarde, pero en buenas condiciones.' },
    { id:4, usuario: 'Bruno Mars', puntuacion: 2, comentario: 'Mala calidad, no recomendaría este producto.' },
    
  ];


  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/Herramientas/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              //'Authorization': `Bearer ${token}`
            },
          }
        );
        if (!response.ok) {
          throw new Error("Error al obtener la Herramienta");
        }
        const responseData = await response.json();
        const imagenes = responseData.imagenes
          ? responseData.imagenes.map((imagen) => imagen.url)
          : [];
        const productoData = {
          id: responseData.id,
          nombre: responseData.nombre,
          descripcion: responseData.descripcion,
          precio: responseData.precio,
          categoria: responseData.categoria,
          imagenes: imagenes,
          caracteristicas: caracteristicas,
          fechaInicioReserva: '2024-04-10',
          fechaFinalReserva: '2024-04-16'
        };
        setProducto(productoData);
        if (productoData.fechaInicioReserva && productoData.fechaFinalReserva) {
          const blocked = generateBlockedDates(productoData.fechaInicioReserva, productoData.fechaFinalReserva);
          console.log(blocked);
          setBlockedDates(blocked);
      }
      } catch (error) {
        console.error("Error haciendo el fetch:", error);
      }
    };

    fetchProducto();
  }, [id]);

  if (!producto) return <div className="text-center">Cargando...</div>;

  return (
    <div className=''>
      <div className=" px-4 pt-5 justify-between">
        <div className="flex justify-between">
          <Link to="/" className="text-colorPrimario px-4 py-2 rounded">
            <FontAwesomeIcon icon={getIconByName("back")} size="lg" /> Volver
          </Link>
        </div>
      </div>

      <div className="col-12 px-2">
        {/* Imagenes */}
        <div className="flex justify-center gap-6 flex-col md:flex-row mb-2 p-4">
  
          <div className="!rounded-l-3xl p-8 shadow w-full h-[515px] bg-white">
            <img
              src={producto.imagenes[0]}
              className="h-full w-full object-contain"
              alt={producto.nombre}
            />
          </div>

        
        <div className="flex m-0 md:ms-2 w-full">
        <div className="w-full flex md:flex-col md:w-full relative">

      
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
          <div className="w-full !rounded-tr-3xl p-2 shadow bg-white h-[250px]">
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
        <span className="font-semibold">Ver más</span>
      </button>

    </div>
  </div>
</div>



        <div className="flex flex-col md:flex-row justify-arround py-6 px-10 gap-8">
          <div className="md:w-6/12 d-flex flex-col justify-center mr-6">
            <div className="flex items-center mb-2">
              <h5 className="font-semibold text-3xl">{producto.nombre}</h5>
            </div>
            <span className="rounded-full px-4 bg-colorSecundario text-white text-sm">
                {producto.categoria.titulo}
              </span>
            <p className="text-lg mt-2">{producto.descripcion}</p>
            <p className="font-bold text-2xl text-slate-900 mt-4">
              ${producto.precio}
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-2 md:p-4 border rounded-lg shadow-lg mt-2">
            <ul className="grid grid-cols-3 gap-4">
              {producto.caracteristicas.map((caracteristica) => (
              <li key={caracteristica.id} className="flex items-center p-2">
                <FontAwesomeIcon icon={getIconByName(caracteristica.icono)} className="mr-3 text-colorPrimario" />
                <span>{caracteristica.titulo}</span>
              </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col  justify-center md:flex-row justify-arroud py-4 px-10 gap-10 ">
          <div>
              <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()} 
              placeholderText="Fecha de inicio"
              excludeDates={blockedDates} 
            />
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              maxDate={blockedDates.length > 0 && startDate < blockedDates[0] ? blockedDates[0] : null} 
              placeholderText="Fecha de fin"
              excludeDates={blockedDates} 
            />


          </div>
          <div className="flex flex-col md:flex-row gap-4 px-4">
            
            <button 
            className="block md:inline-block justify-center  h-10 rounded-lg border-2 hover:scale-105  text-black border-colorPrimario bg-white px-4  hover:bg-colorPrimarioHover hover:text-white hover:border-colorPrimarioHover transition-all"
            onClick={openPolicy}>Políticas</button>
            {isPolicyOpen && <Politicas onClose={closePolicy} />}
            <button className=" block md:inline-block justify-center  h-10 rounded-lg border-2 hover:scale-105  text-black border-colorPrimario bg-white px-4  hover:bg-colorPrimarioHover hover:text-white hover:border-colorPrimarioHover transition-all">
              Reserva
            </button>
          </div>
        </div>
   
        <div className="flex flex-row gap-4  px-4">
            <div>
              <StarRating/> {/*aqui debni llamar a la funcion output */}
            </div>
            <div>
              <label htmlFor="
              ">
                <input type="text" />
              </label>
            </div>
          </div>
        </div>
      <div className="col-12 col-md-6 col-lg-3 p-2 md:p-4 border rounded-lg shadow-lg mt-2">
          
          <Reseñas  reseñas={reseñas}/>
      </div>
    </div>
  
  );
};

export default Detail;
