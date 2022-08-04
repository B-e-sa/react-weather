import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Info from './components/info-container/Info'
import Loading from './components/loading-container/Loading'
import React, { useState } from 'react'

function App() {

  const [weather, setWeather] = useState([])
  const [location, setLocation] = useState('')

  const API_KEY = import.meta.env.VITE_API_KEY
  const language = 'en_us'

  const date = new Date()
  const time = date.getHours()

  const dayTime = time <= 18 ? ('day') : ('night')
  const bgColor = dayTime === 'day' ? ('rgba(255, 255, 255, 0.2)') : ('rgba(165, 165, 165, 0.5)')
  const textColor = dayTime != 'day' && ('white')
  const color = dayTime != 'day' && ('invert(100%)')

  const search = (event) => {
    if (event.key === 'Enter') {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=${language}`

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setWeather(data)
          setLocation('')
        })
    }
  }

  return (
    <div>

      <div className='App d-flex align-items-center flex-column justify-content-center position-relative'
        style={{
          backgroundImage: `url('../src/assets/backgrounds/${dayTime}.jpg')`,
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
            local={weather.name}
            temperature={`${parseInt(weather.main.temp)}°`}
            clouds={weather.weather[0].description}
            humidity={`${weather.main.humidity}%`}
            wind={`${weather.wind.speed * 3, 6}m/s`}
            time={dayTime}
            bgColor={bgColor}
            color={color}
            text={textColor}
          />) : (
          <Loading
            time={dayTime}
            bgColor={bgColor}
            color={color}
          />)
        )}
      </div>
    </div>
  )
}

export default App
