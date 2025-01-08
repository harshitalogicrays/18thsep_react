import React, { useState } from 'react'
import Childoflifting from './Childoflifting'

const Lfitingthestateup = () => {
  let [count,setCount] = useState('')
  let increase = ()=>{
      setCount((prevCount)=>parseInt(prevCount+1))  }
let decrease=()=>{
      setCount((prevCount)=>parseInt(prevCount-1))}
let reset=()=>setCount(0) 
let changeSign=()=>{
    setCount((prevCount)=>-prevCount) 
} 
  return (
    <>
        <h1>Lifting the state up</h1>
        <Childoflifting increasep={increase}
        decreasep={decrease} resetp={reset}
        changeSignp={changeSign}/>
        <h2>Count: {count}</h2>
    </>
  )
}

export default Lfitingthestateup
