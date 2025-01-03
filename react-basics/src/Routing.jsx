import React from 'react'
import {  Route, Routes } from 'react-router';
import App from './App';
import Propsdemoinfun from './components/FunctionalComp/Propsdemoinfun';
const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/funprops' element={<Propsdemoinfun/>}></Route>
   </Routes>
  )
}

export default Routing
