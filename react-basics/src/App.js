import './App.css';
import Firstclasscomp from './components/firstclasscomp';
import Firstfuncomp from './components/Firstfuncomp';
import ConditionalRendering from './components/FunctionalComp/ConditionalRendering';
import CounterApp from './components/FunctionalComp/CounterApp';
import Eventdemoinfun from './components/FunctionalComp/Eventdemoinfun';
import Propsdemo1 from './components/FunctionalComp/Propsdemo1';
import Propsdemoinfun from './components/FunctionalComp/Propsdemoinfun';

function App() {
  let name = "Happy"

  return (
    <div className="container">
      <h1 className="text-primary">Hello React</h1>
      {/* <h2>Welcome to LRA</h2>
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

    <CounterApp/>
    </div>
  );
}

export default App;
