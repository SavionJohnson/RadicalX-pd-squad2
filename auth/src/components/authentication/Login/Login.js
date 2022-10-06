import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../context/AuthContext';
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/dashboard')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };


  return (
    <div className='container'>
        <div className='left'>
        </div>

        <div className='right'>
            <form className='signin' onSubmit={handleSubmit}>
                <h2 className='logo'>Radical X</h2>
                <div className='form'>
                    <label className='label'>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className='input' type="email" />
                </div>
                <div className='form'>
                    <label className='label'>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} className='input' type="password" />
                </div>
                <button className='button'>Sign In</button>
                <div className='content'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <Link to='/signup' className='underline'>
                      <p>Create an account</p>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}