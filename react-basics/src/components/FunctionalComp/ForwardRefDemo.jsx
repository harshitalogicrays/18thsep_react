import React, { forwardRef } from 'react'

const ForwardRefDemo = (props,ref) => {
    return (
        <>
            <h1>{props.title}</h1>
            <input type="text" className="form-control"
            ref={ref}/>
        </>
    )
}

export default forwardRef(ForwardRefDemo)
