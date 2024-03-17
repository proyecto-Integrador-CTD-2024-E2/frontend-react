import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { getIconByName } from '../utilities/icons';



const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    // useEffect(){

    // ,[]}
    return (
        <div>

            {[...Array(5)].map((starS, i) => {
                const ratingValue = i + 1;
                return(
                    <label key={i} className='cursor-pointer'>
                        <input
                            className='hidden'
                            type='radio'
                            name='ratig'
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FontAwesomeIcon
                            icon={getIconByName('starS')}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
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