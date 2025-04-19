import React, { useContext, useEffect } from 'react'
import Home from './pages/home/home'
import { Routes,Route,Link, useNavigate } from 'react-router-dom'
import Login from './pages/login/login'
import Player from './pages/player/player'

import { ToastContainer} from 'react-toastify';
import { MyContext } from './context'


const App = () => {
const {User} = useContext(MyContext)

  const navigate = useNavigate()
  useEffect(()=>{
  if(User){
    navigate("/")
  }else{
    navigate('/login')
  }
  },[User])

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
