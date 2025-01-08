import React from 'react'

const Refchildren = ({innerp}) => {
  return (
    <button type="button" className='btn btn-primary' 
    onClick={()=>{innerp.current.value="children ref"; innerp.current.focus()} }>Focus</button>
  )
}

export default Refchildren
