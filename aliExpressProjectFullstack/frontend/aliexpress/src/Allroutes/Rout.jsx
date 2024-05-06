import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../componetns/Home'

const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default Rout