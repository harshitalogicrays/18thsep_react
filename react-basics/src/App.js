
import Firstclasscomp from './components/firstclasscomp';
import Firstfuncomp from './components/Firstfuncomp';
import ConditionalRendering from './components/FunctionalComp/ConditionalRendering';
import CounterApp from './components/FunctionalComp/CounterApp';
import CSSStyles from './components/FunctionalComp/CSSStyles';
import Eventdemoinfun from './components/FunctionalComp/Eventdemoinfun';
import Propsdemo1 from './components/FunctionalComp/Propsdemo1';
import Propsdemoinfun from './components/FunctionalComp/Propsdemoinfun';
import Statedemo from './components/FunctionalComp/Statedemo';
import StateDemo2 from './components/FunctionalComp/StateDemo2';

import './App.css';
import cssmodule from './app.module.css'
import ListRendering from './components/FunctionalComp/ListRendering';
import Image1 from './assets/images/a.jpg'
import ProductinTable from './components/FunctionalComp/ProductinTable';
import AllProducts from './components/FunctionalComp/AllProducts';
import ReactBootstrap from './components/FunctionalComp/ReactBootstrap';
import Form1 from './components/FunctionalComp/Form1';
import Form3 from './components/FunctionalComp/Form3';
import { MyButton } from './components/FunctionalComp/styledcompoents';
import Header from './components/Header';
import { Outlet } from 'react-router';
import { Container } from 'react-bootstrap';
function App() {
  let name = "Happy"

  return (
    <>
      <Header/>
      <Container className='mt-5'>
          <Outlet/>
      </Container>

      {/* <h1 className="success">Hello React</h1>
      <h2 className={cssmodule.error}>Welcome to LRA</h2>
      <img src={Image1} style={{height:'200px',width:'200px'}}/> */}
      {/*
      <h2>Name = {name} </h2>
      <Firstfuncomp></Firstfuncomp>
      <Firstfuncomp/>
      <Firstclasscomp/> */}
{/* <Propsdemoinfun username="Happy" address="Pune"/> */}

    {/* <Propsdemo1  mobileno={9999999} isMarried={true}/>

    <Propsdemo1 username='HAppy' mobileno={9999999} isMarried={true}>
      <h1>Heading tag1</h1>
      <h2>Heading tag2</h2>
      <ConditionalRendering username="Happy"  isMarried={true}/> 
    </Propsdemo1> */}

    {/* <br/>
    <ConditionalRendering username="Happy"  isMarried={false}/> */}

    {/* <Eventdemoinfun></Eventdemoinfun> */}

    {/* <CounterApp/> */}

    {/* <Statedemo/> */}
    {/* <StateDemo2 username="Happy"/> */}
    {/* <CSSStyles/> */}
    {/* <ListRendering/> */}
    {/* <ProductinTable/> */}

    {/* <AllProducts/> */}
    {/* <ReactBootstrap/> */}
    {/* <Form1/> */}
    {/* <Form3/> */}

        {/* <CSSStyles/>
        <MyButton>Submit</MyButton> */}

        {/* <Form3/> */}

        
    </>
  );
}

export default App;
