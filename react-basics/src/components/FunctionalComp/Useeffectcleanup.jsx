import React, { useEffect, useState } from 'react'

const Useeffectcleanup = () => {
    let [count,setCount] = useState(1)

    useEffect(()=>{
    let interval =  setInterval(()=>{
            console.log("Interval called")
            setCount((prev)=>prev+1)
          },3000)

          return ()=>{ //unmount
            console.log("Interval cleared")
            clearInterval(interval)
          }

    },[])
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Useeffectcleanup
