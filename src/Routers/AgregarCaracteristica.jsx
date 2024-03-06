import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIconByName } from './../utilities/icons';

const iconNames = ['wrench', 'car', 'user', 'hammer', 'ruler', 'trowel'];

const AgregarCaracteristica = () => {

  const { id } = useParams();

  const [caracteristicaData, setCaracteristicaData] = useState({
    id: null,
    nombre: '',
    icono: '',
  });

  useEffect(() => {
    if (id) {
        return;
      fetch(`http://localhost:8080/Categorias/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setCaracteristicaData({
            id: data.id,
            nombre: data.nombre,
            icono: data.icono,
        
          });
        })
        .catch((error) => {
          console.error('Error:', error.message);
          toast.error(`Ha ocurrido un problema al obtener la categoria. ${error.message}`);
        });
    }
  }, [id]);

  const isFieldEmpty = (fieldName) => !caracteristicaData[fieldName];
  const isAllFieldsNonEmpty = () => !(isFieldEmpty('nombre') || isFieldEmpty('icono'));

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCaracteristicaData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleIconSelect = (iconName) => {
    setCaracteristicaData((prevData) => ({ ...prevData, icono: iconName }));
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!isAllFieldsNonEmpty()) {
      toast.error('Hay campos vacios, rellena todos para poder agregar la categoria.');
      return;
    }

    if (id) {
      console.log(id);
      try {

        console.log(caracteristicaData)
        return;
        const response = await fetch(`http://localhost:8080/Categorias`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: caracteristicaData.id,
            nombre: caracteristicaData.nombre,
            icono: caracteristicaData.icono,
          }),
        });
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const responseData = await response.json();
        console.log(responseData)
        console.log('Success:', responseData);
        toast.success('Caracteristica actualizada con éxito!');
      } catch (error) {
        console.error('Error:', error.message);
        toast.error(`Ha ocurrido un problema al actualizar la caracteristica. ${error.message}`);
      }

    } else {

      try {
        console.log(caracteristicaData)
        return
        const response = await fetch('http://localhost:8080/Categorias', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: caracteristicaData.id,
            nombre: caracteristicaData.nombre,
            icono: caracteristicaData.icono,
          }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const responseData = await response.json();
      console.log('Success:', responseData);
      toast.success('Se ha agregado exitosamente la caracteristica!');
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Ha ocurrido un problema al crear la nueva caracteristica.' , error.message);
    }

    }
  
    
  };

  return (
    <div className="container mx-auto p-4">
    <h3 className="text-lg font-semibold mb-4">Agregar Característica</h3>
    <form onSubmit={handleFormSubmit}>
      <div className="col">
          <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="nombre">Nombre</label>
              <input
                  type="text"
                  id="nombre"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                  placeholder="Nombre de la categoria"
                  value={caracteristicaData.nombre}
                  onChange={handleInputChange}
              />
          </div>
          <div className="mb-3">

              <label htmlFor="icono" className="block text-gray-700 font-semibold mb-2">Icono</label>
              <div className="flex flex-wrap items-center justify-start gap-4">
                  {iconNames.map((iconName) => (
                   <button
                   type='button'
                   key={iconName}
                   className={`flex items-center justify-center w-16 h-16 rounded-lg border-2 transition-transform duration-150 ease-in-out ${caracteristicaData.icono === iconName ? 'bg-cyan-900 border-cyan-900 text-white' : 'bg-white text-cyan-900 border-cyan-900 cursor-pointer hover:scale-105'} `}
                   onClick={() => handleIconSelect(iconName)}
               >
                   <FontAwesomeIcon icon={getIconByName(iconName)} className="text-xl" />
               </button>
                  ))}
              </div>

          </div>

      </div>
      <div className="flex justify-end mt-4">
          <button type="submit" className="px-4 py-2 bg-cyan-900 text-white rounded hover:bg-cyan-800">
              {id ? 'Actualizar' : 'Agregar'}
          </button>
      </div>
    </form>
    </div>

  );
};


export default AgregarCaracteristica;