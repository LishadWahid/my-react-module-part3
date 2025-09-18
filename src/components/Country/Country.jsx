import React, { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // setVisited(true);

        // 1. basic system
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // 2nd system
        // setVisited(visited ? false : true);

        // 3rd system
        setVisited(!visited);
    }
    // console.log(country.population.population)
    // console.log(country.flags.flags.png)
    // console.log(country.area.area)
    // console.log(country.name.common)
    return (
        // <div className={`country border-lg text-center ${visited ? 'visited' : 'not-visited'}`}>
        <div className={`country ${visited && 'visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h1>Name: {country.name.common}</h1>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 28748 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;