
import '../App.css';
import { useContext } from "react";
// import SearchContext from App.js
import { WeatherContext } from '../App';

export default function WeatherStats(props) {

    const { weatherValue, setWeatherValue } = useContext(WeatherContext);

    // var desc = 'oof';

    if (props.temperature >= 71) {

        var desc = 'Looks like it is sunny today.';
        var weatherimg = 'sunny';
        var face = 'sentiment_very_satisfied';
        setWeatherValue('App2')

    } else if (props.temperature >=60 && props.temperature <=70) {
        var desc = 'A little cooler today.'
        var weatherimg = 'ac_unit';
        var face = 'sentiment_satisfied';
        setWeatherValue('App3')
    } else {
        var desc = 'Brrrr!!!'
        var weatherimg = 'severe_cold';
        var face = 'mood_bad';
        setWeatherValue('App4')
    };

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
                            <div className='floating' style={{marginLeft: 10, marginTop: 5 }}>
                                <span class="material-symbols-outlined"  style={{fontSize: 50}}>
                                {weatherimg}
                                </span>        
                            </div>
                        </div>   
                        <h1>{props.description}</h1>
                        <h1>{(props.time).slice(8)}</h1>  
                        <div className="row2">
                            <div>
                                <h1>{desc}</h1>
                            </div>
                            <div style={{marginTop: 10, marginLeft: 10}}>
                                <span class="material-symbols-outlined" style={{fontSize: 50}}>
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