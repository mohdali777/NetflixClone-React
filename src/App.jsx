import React, { useEffect } from 'react'
import Home from './pages/home/home'
import { Routes,Route,Link, useNavigate } from 'react-router-dom'
import Login from './pages/login/login'
import Player from './pages/player/player'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebase'
import { ToastContainer} from 'react-toastify';


const App = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
navigate('/')
      }else{
        navigate('/login')
      }
    })
  },[])
  return (
    <div>
              <ToastContainer theme='dark' />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App
