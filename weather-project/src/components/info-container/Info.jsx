import React, { useEffect, useState } from 'react'
import './Info.css'
import '../../components/logo-spin.css'

const Info = (props) => {

    const [layoutWidth, setLayoutWidth] = useState(window.innerWidth <= 550)

    const updateLayout = () => {
        setLayoutWidth(window.innerWidth < 550);
    }

    useEffect(() => {
        window.addEventListener("resize", updateLayout)
        return () => window.removeEventListener("resize", updateLayout);
    }, [])

    const textSizeStyle = {
        fontSize: layoutWidth ?
            "15pt"
            :
            "18pt"
    }

    return (
        <div id='info-container'
            className='
            d-flex 
            justify-content-center 
            align-items-center 
            rounded 
            container
            '
            style={{ backgroundColor: props.style.bgColor }}>
            <div className='d-flex'>
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
                        className="
                        m-2 
                        me-4
                        position-relative
                        "
                        style={{
                            height: layoutWidth ?
                                "120px"
                                :
                                "150px",
                            animation: "Logo-spin infinite 20s linear, move 0.5s linear"
                        }}
                        src={`../src/assets/icons/${props.style.dayTime}.svg`}
                        draggable="false"
                        alt={props.style.time}
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
                    className={
                        `${layoutWidth ?
                            "ms-0"
                            :
                            "ms-4"
                        } 
                        d-flex 
                        flex-column
                        `
                    }
                    style={{ animation: "Load 2s linear" }}>
                    <h1 className='m-0 mb-3' style={{ fontSize: "50pt" }}> {`${parseInt(props.data.temperature)}°C`} </h1>
                    <div className='d-flex flex-column'>
                        <div className='d-flex'>
                            <img src="../src/assets/icons/cloud.svg" alt="cloud" width={'25px'} />
                            <p className='mx-3 mb-0' style={textSizeStyle}> {(props.data.clouds)} </p>
                        </div>
                        <div className='d-flex'>
                            <img src="../src/assets/icons/humidity.svg" alt="humidity" width={'25px'} />
                            <p className='mx-3 mb-0' style={textSizeStyle}> {`${props.data.humidity}%`} </p>
                        </div>
                        <div className='d-flex'>
                            <img src='../src/assets/icons/wind.svg' alt="wind" width={'25px'} />
                            <p className='mx-3 mb-0' style={textSizeStyle}> {`${props.data.wind * 3, 6} m/s`} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info