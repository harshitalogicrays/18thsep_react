import React from 'react'

const Childoflifting = ({increasep,decreasep,resetp,changeSignp}) => {
  return (
  <>
      <button type="button" className="btn btn-primary me-2" onClick={increasep}> Increase </button>  
      <button type="button" className="btn btn-primary me-2" onClick={decreasep}> Decrease </button>  
      <button type="button" className="btn btn-primary me-2" onClick={resetp}> Reset </button>  
      <button type="button" className="btn btn-primary me-2" onClick={changeSignp}> Change Sign </button>  
 
  </>
  )
}

export default Childoflifting
