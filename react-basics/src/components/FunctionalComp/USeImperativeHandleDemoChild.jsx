import React, { forwardRef, useImperativeHandle, useState } from 'react'

const USeImperativeHandleDemoChild = (props,ref) => {
    const [username,setUsername] =useState("")
    useImperativeHandle(ref , ()=>({
        setValue(val){setUsername(val)},
        clearValue(){return setUsername("")},
        getValue(){return username}
    }))

  return (
    <div > <input type="text" className="form-control mb-3"
        value={username} onChange={(e)=>setUsername(e.target.value)}/>
            
    
    </div>
  )
}

export default forwardRef(USeImperativeHandleDemoChild)
