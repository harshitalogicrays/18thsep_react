import React, { useEffect, useRef, useState } from 'react'
import RefIncrementDecrement from './RefIncrementDecrement'

const Uncontrolled = () => {
    let [name,setName] =useState("")
    // let handleName=(e)=>{
    //     console.log(e.target.value)
    //     setName(e.target.value)
    // }

    let username = useRef()
    let focusRef = useRef()
    let handleRef = ()=>{
        username.current.style.color="blue"
        username.current.className = "form-control bg-info"
        alert(username.current.value)
    }
    // window.onload =()=>{ focusRef.current.focus()}
    useEffect(()=>{ focusRef.current.focus()},[]) //onload of component only
  return (
    <div className='container col-6'>
        {/* <div className="mb-4">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={handleName}/>
            </div>
            <button type="button" class="btn btn-primary" 
            onClick={()=>alert(name)} > click Me </button> */}

        <div className="mb-4">
                <label className="form-label">Name</label>
                <input type="text" ref={username} className="form-control" defaultValue="Ram"/>
            </div>
            <button type="button" class="btn btn-primary" 
            onClick={handleRef} > click Me </button>
            {/* {username?.current?.value} */}

            <br/>
            <input type="text" className="form-control mt-5" ref={focusRef}/>
            <br/>

            <RefIncrementDecrement/>
    </div>
  )
}

export default Uncontrolled
