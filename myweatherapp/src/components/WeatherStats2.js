
const MovieList = (props) => {
  return(
    <div className="">
        
        {props.weatherData?.map((movie, i) => (
            <div key={i}>

            </div>
        ))}
           
    </div>)
}

export default MovieList