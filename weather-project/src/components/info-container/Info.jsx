import React from 'react'
import './Info.css'
import '../../components/logo-spin.css'

const Info = (props) => {

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    
    return (
        <div id='info-container' className='d-flex justify-content-center align-items-center rounded container'
            style={{ backgroundColor: props.bgColor }}>
            <div className='d-flex'>
                <div id='spinner' className='d-flex flex-column'>
                    <img className="m-2 me-4"
                        src={`../src/assets/icons/${props.time}.svg`}
                        draggable="false"
                        alt={props.time}
                        style={{ filter: props.color }}
                    />
                    <div className='d-flex justify-content-center me-4 mt-2'>
                        <span style={{ animation: "Load 2s linear", color: props.text }}>
                            <h4> {props.local} </h4>
                        </span>
                    </div>
                </div>
                <div className='d-flex flex-column mt-1 ms-4' style={{ animation: "Load 2s linear", color: props.text }}>
                    <h1 className='m-0' style={{ fontSize: "50pt" }}> {props.temperature} </h1>
                    <div className='d-flex flex-column'>
                        <div className='d-flex'>
                            <img src="../src/assets/icons/cloud.svg" alt="cloud" width={'25px'} style={{ filter: props.color }} />
                            <p className='mx-3 mb-0' style={{ fontSize: "18pt" }}> {capitalize(props.clouds)} </p>
                        </div>
                        <div className='d-flex'>
                            <img src="../src/assets/icons/humidity.svg" alt="humidity" width={'25px'} style={{ filter: props.color }} />
                            <p className='mx-3 mb-0' style={{ fontSize: "18pt" }}> {props.humidity} </p>
                        </div>
                        <div className='d-flex'>
                            <img src='../src/assets/icons/wind.svg' alt="wind" width={'25px'} style={{ filter: props.color }} />
                            <p className='mx-3 mb-0' style={{ fontSize: "18pt" }}> {props.wind} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info