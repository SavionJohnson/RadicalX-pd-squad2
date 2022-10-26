import React , {useState} from 'react'
import Modal from './Modal';
import './Modal.css'
export default function TeamAdmin() {
    const [show, setShow] = useState(false);
  return (
    
    <div id="popup-background" className={`w-full h-full${show?"":""}`}>
        <button type='button' className='open-modal bg-black border-2 flex text-cyan-200 rounded-lg' onClick={()=>{setShow(true)}}>Open Modal</button>
        <div className={`w-full h-full flex flex-col items-center justify-center`}>
        <div className={`background-div h-full w-full bg-black absolute blur-md${!show?"blur-md":""}`} show={show}></div>
        <Modal className={`${show?"backdrop-blur-xl":""}`} show={show} onClose={()=>{setShow(false)}}/>
        </div>
        

    </div>
  )
}
