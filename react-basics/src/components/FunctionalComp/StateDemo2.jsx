import React, { useState } from 'react'

const StateDemo2 = (props) => {
    let [string,setString] =useState(props.username)
  return (
    <div className='container mt-5 col-6'>
    <div className="mb-4">
        <label className="form-label">Number1</label>
        <input type="text" className="form-control" value={string} onChange={(e)=>{setString(e.target.value)}}/>
    </div>
    <h1 style = { { color:"orange" , textDecoration:"line-through"} }>Hello {string}</h1>
</div>
  )
}

export default StateDemo2
