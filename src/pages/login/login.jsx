import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'
import './login.css'

const Login = () => {
const [signState,setSignState] = useState('sign in')

  return (
    <div className='login'>
      <img src={Logo} alt=""className='login-logo'  />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState == 'sign up'?<input type="text" placeholder='Your Name' />:<></>}
         <input type="email" placeholder='Email' />
         <input type="password" placeholder='password' />
         <button>{signState}</button>
         <div className="form-help">
          <div className="remember">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
         </div>
        </form>
        <div className="form-switch">
          {signState == 'sign in'?<p>New To Netflix? <span onClick={()=>setSignState('sign up')}>Signup Now</span></p>:<p>Alredy Have An Account? <span onClick={()=>setSignState('sign in')}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
