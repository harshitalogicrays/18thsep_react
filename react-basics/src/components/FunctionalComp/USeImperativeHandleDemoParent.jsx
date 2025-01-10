import React, { useRef } from 'react'
import USeImperativeHandleDemoChild from './USeImperativeHandleDemoChild'

const USeImperativeHandleDemoParent = () => {
    const childRef = useRef()

  return (
    <div className='container mt-5 col-6'>
      <USeImperativeHandleDemoChild ref={childRef}/>

      <button type="button" class="btn btn-primary me-3" onClick={()=>childRef.current.setValue("Meera")}>Set  </button>

        <button type="button" class="btn btn-primary me-2" onClick={()=>childRef.current.clearValue()}>clear input  </button>
        
        <button type="button" class="btn btn-primary me-3" onClick={()=>alert(childRef.current.getValue())}>Get  </button>
    </div>
  )
}

export default USeImperativeHandleDemoParent
