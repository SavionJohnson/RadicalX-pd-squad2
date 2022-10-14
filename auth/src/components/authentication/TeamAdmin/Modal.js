import React from 'react'
import './Modal.css'
import close_icon from './icons/close.png'
import profile_icon from './icons/profile.png'

export default function Modal(props) {
    if (!props.show) {
        return null
    }
    return (
        <>
            <div className='Card'>

                <div className="top">
                    <div className="card-title">Add Team Admin</div>
                    <div className="card-buttons">
                        <button id='save'>Save</button>
                        <button className='close' onClick={props.onClose}><img src={close_icon} alt="X" /></button>
                    </div>
                </div>

                <div className="icon"></div>

                {/* input Form */}
                <ul>
                    <li>
                        <label htmlFor="name"></label>
                        {/* <i className='close'><img src={profile_icon} alt="" /></i> */}
                        <input type="name" className='input_text' placeholder='Name' />
                    </li>
                </ul>
            </div>
        </>
    )
}
