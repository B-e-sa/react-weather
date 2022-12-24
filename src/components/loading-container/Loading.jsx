import React from 'react'
import dayIcon from '../../assets/icons/day.svg'
import './Loading.css'
import '../../components/logo-spin.css'

const Loading = () => {
    return (
        <div id='loading' className='d-flex justify-content-center align-items-center rounded container m-2'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <img
                src={dayIcon}
                className='pb-2'
            />
        </div>
    )
}

export default Loading