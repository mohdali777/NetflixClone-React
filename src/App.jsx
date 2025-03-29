import React from 'react'
import Home from './pages/home/home'
import { Routes,Route,Link } from 'react-router-dom'
import Login from './pages/login/login'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
