import React , {useState} from 'react'
import Modal from './Modal';
import './Modal.css'
export default function TeamAdmin() {
    const [show, setShow] = useState(false);
  return (
    <div>
        <button type='button' className='bg-black border-2 flex text-cyan-200 rounded-lg' onClick={()=>{setShow(true)}}>Open Modal</button>
        <Modal show={show} onClose={()=>{setShow(false)}}/>
    </div>
  )
}
