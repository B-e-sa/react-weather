import React from 'react'
import './Loading.css'
import '../../components/logo-spin.css'

const Loading = (props) => {
    return (
        <div id='loading' className='d-flex justify-content-center align-items-center rounded container m-2'
            style={{ backgroundColor: props.style.bgColor }}>
            <img
                src={`../src/assets/icons/${props.style.dayTime}.svg`}
                className='pb-2'
                style={{ filter: props.style.color }}
            />
        </div>
    )
}

export default Loading