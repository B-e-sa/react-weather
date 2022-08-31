import React, { useEffect, useState } from 'react'
import './Info.css'
import '../../components/logo-spin.css'

const Info = (props) => {

    const textSizeStyle = {
        fontSize: "18pt"
    }

    return (
        <div id='info-container'
            className='
            d-flex 
            justify-content-center 
            align-items-center 
            rounded 
            '
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <div
                className='
                d-flex
                '
            >
                <div
                    id='spinner'
                    className='
                    d-flex 
                    flex-column
                    justify-content-center
                    align-items-center
                    '
                >
                    <img
                        className='
                        m-2 
                        me-4
                        position-relative
                        '
                        style={{
                            height: "150px",
                            animation: "Logo-spin infinite 20s linear, move 0.5s linear"
                        }}
                        src={props.icons.dayIcon}
                        draggable="false"
                        alt='sun icon'
                    />
                    <div
                        className='
                        d-flex 
                        justify-content-center 
                        me-4
                        mt-2
                        '
                    >
                        <span style={{ animation: "Load 2s linear" }}>
                            <h4> {props.data.local} </h4>
                        </span>
                    </div>
                </div>
                <div
                    className='
                        d-flex 
                        flex-column
                        '
                    style={{ animation: "Load 2s linear" }}>
                    <h1 className='m-0 mb-3' style={{ fontSize: "50pt" }}> {`${parseInt(props.data.temperature)}°C`} </h1>
                    <div className='d-flex flex-column'>
                        <div className='d-flex'>
                            <img src={props.icons.cloudIcon} alt="cloud" width={'25px'} />
                            <p className='mx-3 mb-0' style={textSizeStyle}> {(props.data.clouds)} </p>
                        </div>
                        <div className='d-flex'>
                            <img src={props.icons.humidityIcon} alt="humidity" width={'25px'} />
                            <p className='mx-3 mb-0' style={textSizeStyle}> {`${props.data.humidity}%`} </p>
                        </div>
                        <div className='d-flex'>
                            <img src={props.icons.windIcon} alt="wind" width={'25px'} />
                            <p className='mx-3 mb-0' style={textSizeStyle}> {`${props.data.wind * 3, 6} m/s`} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info