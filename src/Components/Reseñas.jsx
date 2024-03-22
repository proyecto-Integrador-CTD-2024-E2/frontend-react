import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { getIconByName } from '../utilities/icons';
import { useParams } from 'react-router-dom';


const Reseñas = ({reseñasProp}) => {
  // const [ reseñas, setReseñas ] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchReseñas = async () => {
      try {
        const response = await fetch('http://localhost:8080/Reseñas', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!response.ok) {
          throw new Error('Error al obtener las reseñas');
        }
        const data = await response.json();
        
      } catch (error) {
        console.error('Error al obtener las reseñas:', error);
      }
    };

    fetchReseñas();
  }, [id]);

  const formatDate = (fecha) => {
    const date = new Date(fecha);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  

      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reseñasProp.map((reseña) => (
            <div key={reseña.id} className="bg-white rounded-lg p-4 shadow-md">
              <p>Fecha: {formatDate(reseña.fecha)}</p>
              <h3 className="text-lg font-semibold">{reseña.usuario}</h3>
              <div className='flex flex-row'>
                {[...Array(5)].map((_, i) => {
                  const ratingValue = i + 1;
                return(
                      <div key={'star-'+ ratingValue + 'reseña-'+ reseña.id}>
                        <FontAwesomeIcon
                            icon={getIconByName('star')}
                            color={ratingValue <= (reseña.raiting) ? "#ffc107" : "#e4e5e9"}
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