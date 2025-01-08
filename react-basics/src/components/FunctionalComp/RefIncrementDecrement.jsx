import React from 'react'
import Refchildren from './Refchildren'
import ForwardRefDemo from './ForwardRefDemo'

const RefIncrementDecrement = () => {
    let valueRef = React.useRef()
    let innerRef = React.useRef()
    let forRef = React.useRef()
    return (
        <>
        <div className='container col-4'>
            <div className="input-group">
                <button type="button" className='btn btn-primary'
                  onClick={()=>valueRef.current.value > 1 ? valueRef.current.value-- : valueRef.current.value=1 }>-</button>
                <input type="text" className='form-control text-center' ref={valueRef} defaultValue={1}/>
                <button type="button" className='btn btn-primary' 
                onClick={()=>valueRef.current.value++}>+</button>
            </div>

              {/* ref pass to children as prop started */}
            <input type="text" className="form-control mt-5"
            ref={innerRef}
            />
            <Refchildren innerp = {innerRef}/>
        </div>
 {/* ref pass to children as prop end */}
        {/* forwardRef started */}
        <button
            type="button"
            class="btn btn-primary" onClick={()=>alert(forRef.current.value)}
        > value fetch from parent  </button>
        <ForwardRefDemo  title="Forward ref demo" ref={forRef}/>
       
          {/* forwardRef end */}
        </>
    )
}

export default RefIncrementDecrement
