
import '../App.css';
import { useContext, useEffect, useState } from "react";
// import SearchContext from App.js
import { WeatherContext } from '../App';

export default function WeatherStats(props) {

    const { weatherValue, setWeatherValue } = useContext(WeatherContext);
    const [classUpdate, setClassUpdate] = useState('');

        if (props.temperature >= 71) {

            var desc = 'Looks like it is sunny today.';
            var weatherimg = 'sunny';
            var face = 'sentiment_very_satisfied';
            setWeatherValue('App2');

        } else if (props.temperature >=60 && props.temperature <=70) {
            var desc = 'A little cooler today.'
            var weatherimg = 'ac_unit';
            var face = 'sentiment_satisfied';
            setWeatherValue('App3');

        } else {
            var desc = 'Brrrr!!!'
            var weatherimg = 'severe_cold';
            var face = 'mood_bad';
            setWeatherValue('App4');
        };      
    
        useEffect(() => {
            if (props.temperature >= 71) {

                setClassUpdate('sunny')
    
            } else if (props.temperature >=60 && props.temperature <=70) {

                setClassUpdate('cold');
    
            } else {

                setClassUpdate('colder');
            }; 
    }, [weatherValue]);

    return (
        <div>
            <div className='container shrink'>
                <div className='row'>
                    <div className='box'>
                        <h1>{props.name}, {props.state}</h1>
                        <div className="row2">
                            <div>
                                <h1>{props.temperature.toFixed(1)} °F</h1>  
                            </div>
                            <div className='floating' style={{marginLeft: 10, marginTop: 15 }}>
                                <div className={classUpdate}>
                                    <span className="material-symbols-outlined sun">
                                    {weatherimg}
                                    </span>   
                                </div>     
                            </div>
                        </div>   
                        <h1>{props.description}</h1>
                        <h1>{(props.time).slice(8)}</h1>  
                        <div className="row2">
                            <div className='desc'>
                                <h1>{desc}</h1>
                            </div>
                            <div className='face2' style={{marginTop: 10, marginLeft: 10}}>
                                <span class="material-symbols-outlined face2">
                                {face}
                                </span>        
                            </div>
                        </div>   
                    </div> 
                </div>
            </div>
        </div>
    )

}