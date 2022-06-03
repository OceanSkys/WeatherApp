
export default function WeatherStats(props) {



    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='box'>
                        <h1>{props.name}, {props.state}</h1>
                        <h1>{props.temperature} °F</h1>
                        <h1>{props.description}</h1>
                        <h1>{props.time}</h1>                        
                    </div> 
                </div>
            </div>
        </div>
    )

}