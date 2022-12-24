import React, { useEffect, useState } from 'react'
import cloudIcon from '../../assets/icons/cloud.svg'
import windIcon from '../../assets/icons/wind.svg'
import humidityIcon from '../../assets/icons/humidity.svg'
import dayIcon from '../../assets/icons/day.svg'

import '../../components/logo-spin.css'
import './Info.css'

const Info = ({ data }) => {

    const [mediaQuery, setMediaQuery] = useState(false)

    const { clouds, humidity, wind, temperature, local } = data

    useEffect(() => {

        infos([
            [clouds, cloudIcon],
            [humidity, humidityIcon],
            [wind, windIcon]
        ])

        window.addEventListener('resize', () => {
            setMediaQuery(window.matchMedia('(max-width: 600px)').matches)
        })
        return () => window.removeEventListener('resize', () => setMediaQuery(false))

    }, [])

    const textSizeStyle = { fontSize: "18pt" }

    const infos = (infoArray = []) => {
        const arrayLength = infoArray.length
        const infoElements = []

        for (let i = 0; i < arrayLength; i++) {
            infoElements.push(
                <div className='d-flex'>
                    <img src={infoArray[i][i + 1]} alt="cloud" width={25} />
                    <p className='mx-3 mb-0' style={textSizeStyle}>
                        {clouds}
                    </p>
                </div>
            )
        }

        return infoElements

    }

    return (
        <div id='info-container'
            className='d-flex justify-content-center align-items-center rounded'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <div className='d-flex'>
                <div
                    id='spinner'
                    className='d-flex flex-column justify-content-center align-items-center'
                >
                    <img
                        className='m-2 me-4 position-relative'
                        style={{ height: "150px", animation: "Logo-spin infinite 20s linear, move 0.5s linear" }}
                        src={dayIcon}
                        draggable="false"
                        alt='sun icon'
                    />
                    <div className='d-flex justify-content-center me-4 mt-2'>
                        <span style={{ animation: "Load 2s linear" }}>
                            <h4> {local} </h4>
                        </span>
                    </div>
                </div>
                <div
                    className={`${mediaQuery ? null : "ms-5"} d-flex flex-column`}
                    style={{ animation: "Load 2s linear" }}>
                    <h1 className='m-0 mb-3' style={{ fontSize: "50pt" }}> {`${parseInt(temperature)}°C`} </h1>
                    <div className='d-flex flex-column'>
                        {infos()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info