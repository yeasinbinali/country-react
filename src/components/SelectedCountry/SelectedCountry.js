import React from 'react';
import './SelectedCountry.css'

const SelectedCountry = props => {
    const {singleCountry} = props;
    console.log(singleCountry);
    return (
        <div className='selected-country'>
            <h2>Selected country details</h2>
            <img className='country-img' src={singleCountry?.flags?.png} alt=''></img>
            <h2 className='country-name'>{singleCountry?.name?.common}</h2>
            <p>Capital: <small className='capital'>{singleCountry?.capital}</small></p>
            <p>Population: {singleCountry?.population}</p>
            <p>Region: {singleCountry?.region}</p>
        </div>
    );
};

export default SelectedCountry;