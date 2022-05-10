import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Componnents/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Secret from './pages/Secret'
const App = () => {
    return (
        <>  
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/secrets' element={<Secret />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        
           
           
        </>


    )
}

export default App