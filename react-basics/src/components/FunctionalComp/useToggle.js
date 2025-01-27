import React, { useState } from 'react'

const useToggle = () => {
    let [toggle,setToggle] =useState(true)
    let toogleData = (val)=>{
        if(typeof val != "boolean")
            setToggle(!toggle)
        else 
            setToggle(val)
    }
  return ([toggle,toogleData])
}

export default useToggle
