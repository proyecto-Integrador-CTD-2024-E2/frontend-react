import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { getIconByName } from '../utilities/icons';

const Reseñas = ({reseñasProp}) => {
  const [ reseñas, setReseñas ] = useState([])

  useEffect(() => {
    const fetchReseñas = async () => {
      try {
        const response = await fetch('http://localhost:8080/Reseñas');
        if (!response.ok) {
          throw new Error('Error al obtener las reseñas');
        }
        const data = await response.json();
        setReseñas(data);
      } catch (error) {
        console.error('Error al obtener las reseñas:', error);
      }
    };

    fetchReseñas();
  }, []); 

  

      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reseñas.map((reseña) => (
            <div key={reseña.id} className="bg-white rounded-lg p-4 shadow-md">
              <p>{reseña.fecha}</p>
              <h3 className="text-lg font-semibold">{reseña.usuario}</h3>
              <div className='flex flex-row'>
                {[...Array(5)].map((_, i) => {
                  const ratingValue = i + 1;
                return(
                      <div key={'star-'+ ratingValue + 'reseña-'+ reseña.id}>
                        <FontAwesomeIcon
                            icon={getIconByName('star')}
                            color={ratingValue <= (reseña.puntuacion) ? "#ffc107" : "#e4e5e9"}
                            size={'xl'}
                        />
                      </div>
                        
                  )
                })}
              </div>
              <p>{reseña.comentario}</p>
            </div>
          ))}
        </div>
      );
};

export default Reseñas;