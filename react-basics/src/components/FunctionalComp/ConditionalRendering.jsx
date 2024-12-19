import React from 'react'

const ConditionalRendering = ({username,isMarried}) => {
  return (
    <div>
       <h4>{isMarried ? "User is Married" : "User is not Married"}</h4>

      <h4>{(isMarried && username=="Happy") ? "User is Married" : "User is not Married"}</h4>

      <h4>{(isMarried && username=="Happy") ? <div>{username} is married</div> : "User is not Married"}</h4>

      <h4>{isMarried ? <div>
        <h1>{username} is married</h1>
        <h2>Thank you for login</h2>
        </div> : ""}</h4>

      <h4>{isMarried && <div>{username} is married</div>}</h4>

    </div>
  )
}

export default ConditionalRendering
