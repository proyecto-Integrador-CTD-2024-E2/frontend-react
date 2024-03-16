import React from 'react';

const Reseñas = ({ reseñas }) => {

    
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reseñas.map((reseña) => (
            <div key={reseña.id} className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold">{reseña.usuario}</h3>
              <p>Puntuación: {reseña.puntuacion}</p>
              <p>{reseña.comentario}</p>
            </div>
          ))}
        </div>
      );
};

export default Reseñas;