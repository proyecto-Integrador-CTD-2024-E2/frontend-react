import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { getIconByName } from '../utilities/icons';



const StarRating = ({ value, onChange }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    // useEffect(){
            // cuando cambie el rating ejecute un output es uan funcion que le va a avisar al detalle 
    // ,[]}
    return (
        <div>

            {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                return(
                    <label key={i} className='cursor-pointer'>
                        <input
                            className='hidden'
                            type='radio'
                            name='ratig'
                            value={ratingValue}
                            onClick={() => onChange(ratingValue)}
                        />
                        <FontAwesomeIcon
                            icon={getIconByName('star')}
                            color={ratingValue <= (hover || value ) ? "#ffc107" : "#e4e5e9"}
                            size={'xl'}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                        
                    </label>
                   
                )
            })}



        </div>
    );
};

export default StarRating;