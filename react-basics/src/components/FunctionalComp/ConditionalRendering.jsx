import React from 'react'

const ConditionalRendering = ({username,isMarried}) => {
  return (
    <>
       {/* <h4>{isMarried ? "User is Married" : "User is not Married"}</h4>

      <h4>{(isMarried && username=="Happy") ? "User is Married" : "User is not Married"}</h4>

      <h4>{(isMarried && username=="Happy") ? <div>{username} is married</div> : "User is not Married"}</h4>

      <h4>{isMarried ? <div>
        <h1>{username} is married</h1>
        <h2>Thank you for login</h2>
        </div> : ""}</h4> */}

      {isMarried && <div className='text-primary'>{username} is married</div>}
      {isMarried || <div className='text-danger'>{username} is married</div>}
      {username=="Ram" || <h1>User is not valid</h1>}
    </>
  )
}

export default ConditionalRendering
