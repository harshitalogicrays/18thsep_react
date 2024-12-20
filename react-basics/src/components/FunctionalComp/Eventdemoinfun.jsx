import React from 'react'

const Eventdemoinfun = () => {
    let handleClick = ()=>{
        alert("handleClick called")
    }
    let handleAdd =(a,b)=>{alert(a+b)}
  return (
    <>
      <h2>Event Demo</h2>
      <button type="button" class="btn btn-primary me-2" onClick={()=>alert("Button clicked")}>Click Me</button>
      <button type="button" class="btn btn-danger me-2" onClick={handleClick}>Click Me</button>
      <button type="button" class="btn btn-danger me-2" onClick={()=>handleClick()}>Click Me</button>
      <button type="button" class="btn btn-info me-2" onClick={()=>handleAdd(2,3)}>Add</button>
    </>
  )
}

export default Eventdemoinfun
