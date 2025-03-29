import React, {  useState } from 'react'
import Logo from '../../assets/Logo.png'
import './login.css'
import {login,signUp} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
const [signState,setSignState] = useState('sign in')
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [loading,setLoading] = useState(false)

const userAuth = async (event)=>{
  event.preventDefault();
  setLoading(true)
  if(signState === "sign in"){
    await login(email,password)
  }else{
    await signUp(name,email,password)
  }
  setLoading(false)

}

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={Logo} alt=""className='login-logo'  />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState == 'sign up'?<input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Your Name' />:<></>}
         <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Email' />
         <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='password' />
         <button onClick={userAuth} type='submit'>{signState}</button>
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
