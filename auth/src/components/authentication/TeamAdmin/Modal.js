import React from 'react'
import './Modal.css'
import close_icon from './icons/close.png'
import profile_icon from './icons/profile.png'
import picture_icon from './icons/blue_picture.png'

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
                        <button className='icons' onClick={props.onClose}><img src={close_icon} alt="X" /></button>
                    </div>
                </div>

                <div className="profile">
                    <div className="picture-icon">
                        <img src={picture_icon} alt="" />
                    </div>
                </div>

                {/* input Form */}
                <ul className='form'>
                    <li className='input-form'>
                        <input type="name" className='input_text' placeholder='Name' />
                    </li>
                    <li className='input-form'>
                        <input type="email" className='input_text' placeholder='Email Address' />
                    </li>
                    <li className='input-form'>
                        <input type="Link" className='input_text' placeholder='LinkedIn URL (optional) ' />
                    </li>
                </ul>
            </div>
        </>
    )
}
