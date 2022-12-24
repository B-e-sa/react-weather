import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Info from './components/info-container/Info'
import Loading from './components/loading-container/Loading'
import dayBackground from './assets/backgrounds/day.jpg'
import axios from 'axios'
import React, { useState } from 'react'

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

          const { data } = res
          const { main, name, weather, wind } = data
          const { temp, humidity } = main

          if (res === undefined) {
            setHasError(true)
          } else {
            setHasError(false)
            setWeather({
              main: main,
              temperature: temp,
              humidity: humidity,
              local: name,
              clouds: weather[0].description,
              wind: wind.speedy
            })
            setLocation('')
          }
        })
    }
  }

  return (
    <div>
      <div
        className='App d-flex align-items-center flex-column justify-content-center position-relative'
        style={{ backgroundImage: `url(${dayBackground})` }}>
        <div className='container flex-column d-flex align-items-center'>
          {hasError ?
            <div style={{ fontSize: "15pt", color: "white" }}>
              An error occurred, please try again
            </div> : null}
          <input
            type='text'
            id='text-bar'
            className='border light form-control shadow-sm rounded-5 p-2 ps-4 h-100 m-4 text-black'
            placeholder='Search a local'
            onChange={event => setLocation(event.target.value)}
            onKeyDown={search}
            value={location}
          />
        </div>
        {hasError || weather.main === undefined ?
          <Loading />
          :
          <Info data={weather} />
        }
      </div>
    </div>
  )
}

export default App
