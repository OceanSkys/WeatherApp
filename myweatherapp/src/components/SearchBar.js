import React from 'react';
import { useState } from 'react'
import WeatherStats from './WeatherStats';
import { useContext } from "react";
// import SearchContext from App.js
import { WeatherContext } from '../App';

const SearchBar = () => {
    const [weather, setWeather] = useState(null);
    const [locationKey, setLocationKey] = useState('');
    const { weatherValue, setWeatherValue } = useContext(WeatherContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!locationKey) return;

        async function getWeather(locationKey) {

            const API_KEY = 'f2b6b296aadd41d49ee8684f217a9e16';
    
            const url = `https://api.weatherbit.io/v2.0/current?city=${locationKey}&key=${API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            setWeather(data);
            console.log(data);
        }
    getWeather(locationKey)

    }

    
    return (
        <div>
            <form onSubmit={handleSubmit} className='searchbar'>
                <h1 className='citysearch'>Search Your City</h1>
                <input
                    className='searchbarinput'
                    value={locationKey}
                    onChange={(event) => setLocationKey(event.target.value)}
                    placeholder='ex: Los Angeles, CA '
                    type='text'       
                >
                </input>
                <button className='submit' type="submit">
                    <span className="material-symbols-outlined">
                        arrow_forward
                    </span>
                </button>
            </form>
            <div className='container'>
                <div className='row'>
                    <div className='box2'>
                        <h1 className='floating'>Begin your search!</h1>                      
                    </div> 
                </div>
            </div>
        { weather && 
            <WeatherStats 
                name={weather?.data[0]?.city_name}
                state={weather?.data[0]?.state_code}
                temperature={weather?.data[0]?.temp * 9/5 + 32}
                description={weather?.data[0]?.weather.description}
                time={weather?.data[0]?.datetime}
                />
          
            }
        </div>
    );
};

export default SearchBar;