import React from 'react';
import './Countries.css'

const Countries = props => {
    const {name, flags} = props.country;
    const {handleAddCountry} = props;
    return (
        <div className='country'>
            <img src={flags.png} alt='img-failed'></img>
            <h4>{name.common}</h4>
            <button onClick={() => handleAddCountry(props.country)} className='country-btn'>Details</button>
        </div>
    );
};

export default Countries;