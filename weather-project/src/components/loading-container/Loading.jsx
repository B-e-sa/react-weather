import React from 'react'
import './Loading.css'
import '../../components/animation.css'

const Loading = (props) => {
    return (
        <div id='loading' className='d-flex justify-content-center align-items-center rounded container m-2'
            style={{ backgroundColor: props.bgColor }}>
            <img
                src={`../src/assets/icons/${props.time}.svg`}
                className='pb-2'
                style={{ filter: props.color }}
            />
        </div>
    )
}

export default Loading