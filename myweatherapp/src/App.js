import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import { createContext, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import HeaderFooter from './components/HeaderFooter';

export const WeatherContext = createContext();

function App() {

  const [weatherValue, setWeatherValue] = useState('App');

  return (
    <div className={weatherValue}>
      <WeatherContext.Provider value={{ weatherValue, setWeatherValue }}>
        <Routes>
          <Route path ='/' element={<HeaderFooter/>}>
            <Route index element={<Home/>} />
            <Route path='Contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
