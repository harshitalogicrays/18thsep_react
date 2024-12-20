/*import React from 'react'
const Propsdemo1 = (props) => {
  return (
    <div>
      <h3>{props.mobileno}</h3>
      {props.children}
    </div>
  )
}
export default Propsdemo1 */


import React, { Fragment } from 'react'
const Propsdemo1 = ({mobileno,username="Ram",isMarried,children}) => { //defaultProp
  return (
    <Fragment>
        <h1>PRops Demo</h1>
      <h3>{mobileno}</h3>
      <h4>{username}</h4>
      {/* {children} */}
      {children?.[1]}
    </Fragment>
  )
}
export default Propsdemo1

