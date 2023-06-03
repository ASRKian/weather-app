import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchWeatherAction } from '../Redux/Slices/weatherSlice';
import '../App.css';

const Search = () => {
  const [city, setCity] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  }
  const dispatch = useDispatch();
  return (
    <div className='searchDiv'>
      <input type="text" className='search' placeholder='search' onChange={handleChange} value={city} />
      <button className='searchBtn' type='submit' onClick={() => dispatch(fetchWeatherAction(city))}>Search</button>
    </div>
  )
}

export default Search
