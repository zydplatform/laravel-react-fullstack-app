import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

  const onSubmit = (ev)=>{
    ev.preventDefault()
  }
  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form action="" onSubmit={onSubmit}>
          <h1 className='title'>Login into your Account</h1>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type="button" className='btn btn-block'>Login</button>
            <p className='message'>
                Not Registered ? <Link to='/signup'>Create Account</Link>
            </p>
        </form>

      </div>

    </div>
  )
}
