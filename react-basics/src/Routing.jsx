import React from 'react'
import {  Route, Routes } from 'react-router';
import App from './App';
import Propsdemoinfun from './components/FunctionalComp/Propsdemoinfun';
import Firstclasscomp from './components/firstclasscomp';
import Statedemo from './components/FunctionalComp/Statedemo';
import PageNotFound from './PageNotFound';
import About from './components/FunctionalComp/About';
import Home from './components/FunctionalComp/Home';
import Firstfuncomp from './components/Firstfuncomp';
import CounterApp from './components/FunctionalComp/CounterApp';
import AllProducts from './components/FunctionalComp/AllProducts';
import ProductinTable from './components/FunctionalComp/ProductinTable';
import Form3 from './components/FunctionalComp/Form3';
import Form1 from './components/FunctionalComp/Form1';
import Lfitingthestateup from './components/FunctionalComp/Lfitingthestateup';
import Uncontrolled from './components/FunctionalComp/Uncontrolled';
const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About/>}></Route>
            <Route path="fun/first" element={<Firstfuncomp/>}></Route>
            <Route path="fun/props" element={<Propsdemoinfun/>}></Route>
            <Route path="fun/state" element={<Statedemo/>}></Route>
            <Route path="fun/counter" element={<CounterApp/>}></Route>
            <Route path="fun/products" element={<AllProducts/>}></Route>
            <Route path="fun/list" element={<ProductinTable/>}></Route>
            <Route path="fun/form/validations/regular" element={<Form1/>}></Route>
            <Route path="fun/form/validations/rhf" element={<Form3/>}></Route>
            <Route path="fun/lifting" element={<Lfitingthestateup/>}></Route>
            <Route path="fun/uncontrolled" element={<Uncontrolled/>}></Route>

            <Route path="class/first" element={<Firstclasscomp/>}></Route>
        </Route>
        


        {/* <Route path='/funprops' element={<Propsdemoinfun/>}></Route>
        <Route path='/class/first' element={<Firstclasscomp/>}></Route>
        <Route path='/fun/state/:name' element={<Statedemo/>}></Route> */}

        <Route path="*" element={<PageNotFound/>}/>
   </Routes>
  )
}

export default Routing
