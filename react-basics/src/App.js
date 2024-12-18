import './App.css';
import Firstclasscomp from './components/firstclasscomp';
import Firstfuncomp from './components/Firstfuncomp';
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

      <Propsdemoinfun username="Happy" address="Pune"/>
    </div>
  );
}

export default App;
