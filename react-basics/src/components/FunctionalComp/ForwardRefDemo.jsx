import React from 'react'

const ForwardRefDemo = React.forwardRef((props,ref) => {
    return (
        <>
            <h1>{props.title}</h1>
            <input type="text" className="form-control"
            ref={ref}/>
        </>
    )
})

export default ForwardRefDemo
