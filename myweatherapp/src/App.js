import './App.css';
import Home from './components/Home'
import { createContext, useState } from "react";

export const WeatherContext = createContext();

function App() {

  const [weatherValue, setWeatherValue] = useState('App');

  return (
    <div className={weatherValue}>
      <WeatherContext.Provider value={{ weatherValue, setWeatherValue }}>
        <Home/>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
