
export default function WeatherStats(props) {

    var desc = 'oof';

    if (props.temperature >= 70) {

        var desc = 'Looks like its sunny today';
        var weatherimg = 'sunny';
        var face = 'sentiment_very_satisfied';

    } else if (50 > props.temperature < 70) {
        var desc = 'A little cooler today'
        var weatherimg = 'ac_unit';
        var face = 'sentiment_satisfied';
    } else {
        var desc = 'its cooooooooooold'
        var weatherimg = 'severe_cold';
        var face = 'mood_bad';
    };

    return (
        <div>
            <div className='container'>
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