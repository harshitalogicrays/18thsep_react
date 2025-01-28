import React, { useState } from 'react'
import { toast } from 'react-toastify'

const useToggle = () => {
    let [toggle,setToggle] =useState(true)
    let toogleData = (val)=>{
        if(typeof val != "boolean")
            setToggle(!toggle)
        else 
            setToggle(val)
        toast.success("toogle done")
    }
  return ([toggle,toogleData])
}

export default useToggle
