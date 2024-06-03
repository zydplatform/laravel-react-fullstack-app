import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function Signup() {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const {setUser, setToken} = useStateContext()
  const onSubmit = (ev)=>{
    ev.preventDefault()
    debugger
    const payload = {
      
      name : nameRef.current.value,
      email : emailRef.current.value,
      password : passwordRef.current.value,
      password_confirmation : passwordConfirmRef.current.value
    }
    axiosClient.post('/signup', payload).
    then(({data})=>{
      setUser(data.user)
      setToken(data.token)
    }).catch(err=>{
      const response = err.response;
      if(response && response.status ===422){
        console.log(response.data.errors);
      }
    })
  }
  return (
    <div className='login-signup-form animated fadeInDown'>
       <div className='form'>
        <form action="" onSubmit={onSubmit}>
          <h1 className='title'>Sign Up For Free</h1>
          <input ref={nameRef} type="text" placeholder='Full Name' />
            <input ref={emailRef} type="email" placeholder='Email' />
            <input ref={passwordRef} type="password" placeholder='Password' />
            <input ref={passwordConfirmRef} type="password" placeholder='Confirm Password' />
            <button type="button" className='btn btn-block'>Signup</button>
            <p className='message'>
                Already Registered ? <Link to='/login'>Login</Link>
            </p>
        </form>

      </div>
    </div>
  )
}
