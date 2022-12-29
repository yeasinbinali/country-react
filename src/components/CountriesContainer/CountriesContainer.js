import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';
import SelectedCountry from '../SelectedCountry/SelectedCountry';
import './CountriesContainer.css'

const CountriesContainer = () => {

    const [singleCountry, setSingleCountry] = useState([]);
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleAddCountry = country => {
        setSingleCountry(country);
    }

    return (
        <div className='countries-container'>
            <div className='countries-div'>
                {
                    countries.map(country => <Countries
                    country = {country}
                    key = {country.cca3}
                    handleAddCountry = {handleAddCountry}
                    ></Countries>)
                }
            </div>
            <div>
                <SelectedCountry
                    singleCountry = {singleCountry}
                ></SelectedCountry>
            </div>
        </div>

    );
};

export default CountriesContainer;