import React from 'react'
import './Modal.css'
import close_icon from './icons/close.png'
import profile_icon from './icons/profile.png'
import picture_icon from './icons/blue_picture.png'
import profileinp_icon from './icons/profile@2x.svg'
import profilesms_icon from './icons/sms@2x.svg'
import profilelink_icon from './icons/link@2x.svg'


export default function Modal(props) {
    if (!props.show) {
        return null
    }
    return (
        <>
            <div className={`Card ${props.className}`} >

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
                        <img className='img-profile top-7' src={profileinp_icon} alt='profile'/>
                        <input type="name" className='input_text' placeholder='Name' />
                    </li>
                    <li className='input-form'>
                        <img className='img-profile2 top-7' src={profilesms_icon} alt='profile'/>

                        <input type="email" className='input_text' placeholder='Email Address' />
                    </li>
                    <li className='input-form'>
                        <img className='img-profile3 top-7' src={profilelink_icon} alt='profile'/>

                        <input type="Link" className='input_text' placeholder='LinkedIn URL (optional) ' />
                    </li>
                </ul>
            </div>
        </>
    )
}
