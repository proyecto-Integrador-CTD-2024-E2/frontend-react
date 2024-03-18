import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { getIconByName } from '../utilities/icons';

const Reseñas = ({ reseñas }) => {

    
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reseñas.map((reseña) => (
            <div key={reseña.id} className="bg-white rounded-lg p-4 shadow-md">
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