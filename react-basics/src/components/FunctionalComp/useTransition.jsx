import React, { useState, useTransition } from 'react'

const UseTransitionDemo = () => {
    const [list,setList] =useState([])
    const [isPending, startTransition] = useTransition()

    let loadItems = ()=>{
        startTransition(()=>{
            let arr = []
            for(let i=1;i<=2000;i++){
                arr.push(`Item ${i}`)
            }
            setList(arr)
        })
    }
  return (
   <>

    <button  type="button" class="btn btn-primary" onClick={loadItems}
    disabled={isPending} >
        {isPending ? <>
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status">Loading...</span>
        </> : " Click me to Load Items"}
    </button>
    <ul>
        {list.map((item,index)=><li key={index}>{item}</li>)}
    </ul>
       
   </>
  )
}

export default UseTransitionDemo
