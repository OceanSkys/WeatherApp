import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';
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

            const API_KEY = '5262afffa9a84a598e192941232510';
        //    Old url = https://api.weatherbit.io/v2.0/current?city=${locationKey}&key=${API_KEY}
            const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${locationKey}`;
            const response = await fetch(url);
            const data = await response.json();
            setWeather(data);
            console.log(data);
        }

    getWeather(locationKey)


    }   

    useEffect(() => {
        console.log("weather", weather?.location?.name)
        }, [weather]);

    return (
        <div>
            <form onSubmit={handleSubmit} className='searchbar'>
                <h1 className='citysearch'>Search Your City</h1>
                <input
                    className='searchbarinput'
                    value={locationKey}
                    onChange={(event) => setLocationKey(event.target.value)}
                    placeholder='ex: Fresno, CA'
                    type='text'       
                >
                </input>
                <button className='submit btn1' type="submit">
                    <span className="material-symbols-outlined">
                        arrow_forward
                    </span>
                </button>
            </form>
        { weather ? ( 
            <WeatherStats 
                name={weather?.location?.name}
                state={weather?.location?.region}
                temperature={weather?.current?.temp_c * 9/5 + 32}
                description={weather?.current?.condition?.text}
                time={(weather?.location?.localtime)}
                />         
            ) : (
            <div className='container'>
                <div className='row'>
                    <div className='box2'>
                        <h1 className='floating'>Begin your search!</h1>                      
                    </div> 
                </div>
            </div>
            )};
        </div>
    );
};

export default SearchBar;