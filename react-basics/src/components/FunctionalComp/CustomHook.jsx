import React from 'react'
import useToggle from './useToggle'

const CustomHook = () => {
  let [toggle,toogleData] = useToggle()
  // console.log(toogle,toogleData)
  return (
   <>
    <h1>Custom Hook</h1>
    <button type="button" onClick={()=>toogleData(false)}>Hide Data</button>
    <button type="button" onClick={()=>toogleData(true)}>Show Data</button>
    <button type="button" onClick={toogleData}>Toggle Data</button>
    {toggle &&
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum voluptate eaque eum perferendis enim officia, exercitationem consectetur odit sint aliquid ad in atque nam doloremque quasi delectus perspiciatis sunt.</p>
   }
   </>
  )
}

export default CustomHook
