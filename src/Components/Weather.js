import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherAction } from '../Redux/Slices/weatherSlice';
import '../App.css';
import Spinner from './Spinner';

const Weather = () => {

  //dispatch action

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchWeatherAction("Jhansi"));
  }, []);

  // select state from store

  const state = useSelector((state => state));
  const { weather, error, loading } = state;
  return (<>
    {loading ? <Spinner/> : error ? <h2 className='errorMssg'> {error.message}! </h2> : <div className='weatherDiv'>
      <h1 className="cityName">City: {weather?.name}</h1>
      <h3 className="temp">Temp: {(weather?.main.temp - 273.15).toFixed(2)}°C</h3>
      <h3 className="feels">Feels Like: {(weather?.main.feels_like - 273.15).toFixed(2)}°C</h3>
      <h3 className="sky">In Sky: {weather?.weather[0].main}</h3>
      {weather &&  <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="Weather" className=" w-20 m-auto pt-4" />}
      <h3 className='windSpeed'>wind speed {((weather?.wind.speed) * 3.6).toFixed(2)} km/hr</h3>
    </div>}
  </>
  )
}

export default Weather
