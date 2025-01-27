import React, { use } from 'react'
import { context1 } from '../MyContext'

const UseContextDemo = () => {
    const mycon  =  use(context1)
    console.log(mycon)
  return (
    <div>
      <h1>Context Demo</h1>
      <button type="button" 
      onClick={()=>mycon.changeUserName("Harshita")}>click me</button>
      <h2>{mycon.username}</h2>
    </div>
  )
}

export default UseContextDemo
