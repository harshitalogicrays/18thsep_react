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
import UseCallbackDemo from './components/FunctionalComp/UseCallbackDemo';
import USeMemoDemo from './components/FunctionalComp/USeMemoDemo';
import USeImperativeHandleDemoParent from './components/FunctionalComp/USeImperativeHandleDemoParent';
import UseTransitionDemo from './components/FunctionalComp/useTransition';
import HooksDemo from './components/FunctionalComp/HooksDemo';
import ClassCompLayout from './components/ClassComp/ClassCompLayout';
import Propsinclass from './components/ClassComp/Propsinclass';
import StateandEvent from './components/ClassComp/StateandEvent';
import ForminClass from './components/ClassComp/ForminClass';
import FormValidations from './components/ClassComp/FormValidations';
import Refdemoinclass from './components/ClassComp/Refdemoinclass';
import LifeCycleMethods from './components/ClassComp/LifeCycleMethods';
import PureCompDemo from './components/ClassComp/PureCompDemo';
import Register from './components/FunctionalComp/Register';
import Login from './components/FunctionalComp/Login';
import Header from './components/Header';
import Useeffectcleanup from './components/FunctionalComp/Useeffectcleanup';
import ErrorDemo from './components/FunctionalComp/ErrorDemo';
import HOCDemo from './components/ClassComp/HOCDemo';
const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
        <Route element={<Header/>}>
        <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}></Route>
            <Route path="fun/first" element={<Firstfuncomp/>}></Route>
            <Route path="fun/props" element={<Propsdemoinfun/>}></Route>     
            <Route path="fun/products" element={<AllProducts/>}></Route>
            <Route path="fun/list" element={<ProductinTable/>}></Route>
            <Route path="fun/form/validations" element={<Form1/>}></Route>
            <Route path="fun/form/validations/rhf" element={<Form3/>}></Route>
            <Route path="fun/lifting" element={<Lfitingthestateup/>}></Route>
            <Route path="fun/uncontrolled" element={<Uncontrolled/>}></Route>
            <Route path="fun/hooks" element = {<HooksDemo/>}>
                <Route index element={<Statedemo/>}></Route>
                <Route path="state" element={<Statedemo/>}></Route>
                <Route path="counter" element={<CounterApp/>}></Route>
                <Route path="usecallback" element={<UseCallbackDemo/>}></Route>
                <Route path="usememo" element={<USeMemoDemo/>}></Route>
                <Route path="useimperativehandle" element={<USeImperativeHandleDemoParent/>}></Route>
                <Route path="usetransition" element={<UseTransitionDemo/>}></Route>
                <Route path="useeffect" element={<Useeffectcleanup/>}></Route>
            </Route>

            <Route path="class" element={<ClassCompLayout/>}>
              <Route index element={<Firstclasscomp/>}/>
              <Route path="props" element={
                <Propsinclass username={123} isActive={false}>
                    <h3>children</h3>
                    <Firstclasscomp></Firstclasscomp>
              </Propsinclass>}/>
              <Route path="stateandevent" element={<StateandEvent/>}/>
              <Route path="form" element={<ForminClass/>}/>
              <Route path="form/validations" element={<FormValidations/>}/>
              <Route path="ref" element={<Refdemoinclass/>}/>
              <Route path="lifecycle" element={<LifeCycleMethods/>}/>
              <Route path="pure" element={<PureCompDemo/>}/>
              <Route path="error" element={<ErrorDemo/>}/>
              <Route path="hoc" element={<HOCDemo/>}/>
            </Route>
        </Route>
            
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Route>
        


        {/* <Route path='/funprops' element={<Propsdemoinfun/>}></Route>
        <Route path='/class/first' element={<Firstclasscomp/>}></Route>
        <Route path='/fun/state/:name' element={<Statedemo/>}></Route> */}

        <Route path="*" element={<PageNotFound/>}/>
   </Routes>
  )
}

export default Routing
