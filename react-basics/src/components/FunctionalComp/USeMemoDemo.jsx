import React, { useMemo, useState } from 'react'

const USeMemoDemo = () => {
    let [count,setCount] = useState(1)
    let  [show,setShow] =useState(false)
    let countfun = (count)=>{
        for(let i=1;i<=1000000000;i++){}
        console.log("count",count)
        return count
    }
    // let countvalues  = countfun(count)

    let countvalues = useMemo(()=>countfun(count),[count])
  return (
    <>
        <h1>useMemo Hook</h1>
        <button  type="button" class="btn btn-primary" 
        onClick={()=>setCount(count+1)}> Counter </button>
        <h3>{countvalues}</h3>
        <button  type="button" class="btn btn-primary" 
        onClick={()=>setShow(!show)}> {show ? "Show" :"Hide"} </button>
    </>
  )
}

export default USeMemoDemo
