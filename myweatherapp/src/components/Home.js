import { useEffect, useState} from 'react';
import SearchBar from './SearchBar'
import './Home.css';
import WeatherStats from './WeatherStats';

export default function WeatherFetch() {

    const [locationKey, setLocationKey] = useState('');
    const [weather, setWeather] = useState('');
    const [show, setShow] = useState(false);
    const [tempy, setTempy] = useState('')
    // const [data, setData] = useState('')

    
    const getWeather = async (locationKey) =>{

        const apikey = "f2b6b296aadd41d49ee8684f217a9e16";

        const url = `https://api.weatherbit.io/v2.0/current?city=${locationKey}&key=${apikey}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data) {
            setWeather(data);
        };

        // added setShow hook so WeatherStats props aren't calling empty data array for api
        // added setTemperature/setTempy hook to change celcius to fahrenheit
        // if (weather != 1) {
        //     setShow(true)
        //     setTempy(weather?.data[0]?.temp * 9/5 + 32 )
        // } else if (typeof weather === 'undefined' || weather.length <= 0) {       
        //     setShow(false)
        //     console.log('Search results undefined')       
        // }
    
    }
    //Updates search results for getWeather function
    useEffect(() => {
        // instead of using weather/data is a parameter, I'm using locationkey value length as a parameter for showing results
        if (locationKey.length > 1) {
            setShow(true)
            setTempy(weather?.data[0]?.temp * 9/5 + 32 )
        } else if (typeof weather === 'undefined' || locationKey.length == 0) {       
            setShow(false)
            console.log('Search results undefined')       
        }
        getWeather(locationKey)
    }, [locationKey]);

    return (
        <div>
            <SearchBar
            locationKey={locationKey}
            setLocationKey={setLocationKey}
            />
            <div className='container'>
                <div className='row'>
                    <div className='box2'>
                        <h1 className='floating'>Begin your search!</h1>                      
                    </div> 
                </div>
            </div>
           { 
           show &&
            <WeatherStats 
                name={weather?.data[0]?.city_name}
                state={weather?.data[0]?.state_code}
                temperature={tempy}
                description={weather?.data[0]?.weather.description}
                time={weather?.data[0]?.datetime}
                />
           }
        </div>
    )
}