import React from 'react'

const CounterApp = () => {
  /*  let count = 0
    let increase = ()=>{
        count++
        console.log(count)
    } */

    let [count,setCount] = React.useState('') //hook react16
    let increase = ()=>{
        // setCount(parseInt(count++)) //count = count+1
        setCount((prevCount)=>parseInt(prevCount+1))
        // console.log(count)
    }
    let decrease=()=>{
       /* if(count>1)
        setCount((prevCount)=>parseInt(prevCount-1)) //count=count-1
        else
        setCount(1) //count=1 */

        setCount((prevCount)=>parseInt(prevCount-1))
    }
    let reset=()=>setCount('') //count=''
    let changeSign=()=>{
        count!=0 && setCount((prevCount)=>-prevCount) //setCount(-count)
    } //count=12 , count=+-12 , count=--12
  return (
    <>
      <h1>Counter App</h1>
        <button type="button" className="btn btn-primary me-2" onClick={increase}> Increase </button>  
      <button type="button" className="btn btn-primary me-2" onClick={decrease}> Decrease </button>  
      <button type="button" className="btn btn-primary me-2" onClick={reset}> Reset </button>  
      <button type="button" className="btn btn-primary me-2" onClick={changeSign}> Change Sign </button>  
    <h1>count: {count}</h1>
    </>
  )
}

export default CounterApp
