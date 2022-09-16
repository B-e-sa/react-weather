import React from 'react'
import './Loading.css'
import '../../components/logo-spin.css'

const Loading = (props) => {
    return (
        <div id='loading' className='d-flex justify-content-center align-items-center rounded container m-2'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <img
                src={props.icons.dayIcon}
                className='pb-2'
            />
        </div>
    )
}

export default Loading