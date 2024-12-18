// function Firstfuncomp(){
//     return(<h1>First Functional Component</h1>)
// }
// export default Firstfuncomp

// import Firstclasscomp from "./firstclasscomp"

// let Firstfuncomp=()=>{
//     return(  
//     <div>
//     <h1>First Functional Component</h1> 
//     <Firstclasscomp/>
//      </div>       
//     )
// }
// export default Firstfuncomp

//rfc or rfce - regular function
//rafc
import React from 'react'
import Firstclasscomp from './firstclasscomp'

const Firstfuncomp = () => {
  return (
    <div>
      <h1 className='bg-danger'>First Functional Component</h1> 
      <Firstclasscomp/>
    </div>
  )
}

export default Firstfuncomp
