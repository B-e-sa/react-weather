import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Info from './components/info-container/Info'
import Loading from './components/loading-container/Loading'

import icons from './assets/exportIcons'
import dayBackground from './assets/backgrounds/day.jpg'

import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [weather, setWeather] = useState({})
  const [location, setLocation] = useState('')
  const [hasError, setHasError] = useState(false)

  const API_KEY = import.meta.env.VITE_API_KEY
  const language = 'en_us'

  const search = async (event) => {
    if (event.key === 'Enter') {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=${language}`

      await axios.get(url)
        .catch(() => {
          setHasError(true)
        })
        .then((res) => {
          if (res === undefined) {
            setHasError(true)
          } else {
            setHasError(false)
            setWeather({
              main: res.data.main,
              local: res.data.name,
              temperature: res.data.main.temp,
              clouds: res.data.weather[0].description,
              wind: res.data.wind.speed,
              humidity: res.data.main.humidity
            })
            setLocation('')
          }
        })
    }
  }

  return (
    <div>
      <div
        className='
        App 
        d-flex 
        align-items-center 
        flex-column 
        justify-content-center 
        position-relative
        '
        style={{
          backgroundImage: `url(${dayBackground})`,
        }}>
        <div className='container flex-column d-flex align-items-center'>
          {hasError ? <div style={{ fontSize: "15pt", color: "white" }}> An error occurred, plase try again </div> : null}
          <input
            type='text'
            id='text-bar'
            className='
            border 
            light 
            form-control 
            shadow-sm 
            ounded-5 
            p-2 
            ps-4 
            h-100 
            m-4 
            text-black
            '
            placeholder='Search a local'
            onChange={event => setLocation(event.target.value)}
            onKeyDown={search}
            value={location}
          />
        </div>
        {hasError || weather.main === undefined ?
          (
            <Loading
              icons={icons}
            />) :
          (
            <Info
              data={weather}
              icons={icons}
            />)
        }
      </div>
    </div>
  )
}

export default App
