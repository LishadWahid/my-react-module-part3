import React from 'react';
import './Country.css';

const Country = ({country}) => {
    const handleVisited = () => {
        console.log('button clicked');
    }
    // console.log(country.population.population)
    // console.log(country.flags.flags.png)
    // console.log(country.area.area)
    // console.log(country.name.common)
    return (
        <div className='country'>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h1>Name: {country.name.common}</h1>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 28748 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;