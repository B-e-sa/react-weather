import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Info from './components/info-container/Info'
import Loading from './components/loading-container/Loading'
import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [weather, setWeather] = useState({})
  const [location, setLocation] = useState('')
  const [style, setStyle] = useState({
    bgColor: 'rgba(255, 255, 255, 0.2)',
    dayTime: 'day'
  })

  const API_KEY = import.meta.env.VITE_API_KEY
  const language = 'en_us'

  const search = (event) => {
    if (event.key === 'Enter') {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=${language}`

      axios.get(url)
        .then((res) => {
          setWeather({
            main: res.data.main,
            local: res.data.name,
            temperature: res.data.main.temp,
            clouds: res.data.weather[0].description,
            wind: res.data.wind.speed
          })
          setLocation('')
        })
    }
  }

  return (
    <div>
      <div className='App d-flex align-items-center flex-column justify-content-center position-relative'
        style={{
          backgroundImage: `url('../src/assets/backgrounds/${style.dayTime}.jpg')`,
        }}>
        <div className='container flex-column d-flex align-items-center'>
          <input
            type='text'
            id='text-bar'
            className=' border light form-control shadow-sm rounded-5 p-2 ps-4 h-100 m-4 text-black'
            placeholder='Search a local'
            onChange={event => setLocation(event.target.value)}
            onKeyDown={search}
            value={location}
          />
        </div>
        {(typeof weather.main != 'undefined' ? (
          <Info
            data={weather}
            style={style}
          />) : (
          <Loading
            style={style}
          />)
        )}
      </div>
    </div>
  )
}

export default App
