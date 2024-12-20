import React from 'react'

const Propsdemoinfun = (props) => {
    console.log(props)
    // props.username = "Sad"//props are read only
  return (
    <React.Fragment>
        <h1>Props Demo</h1>
        <h2>{props.username}</h2>
        <h3>{props.address}</h3>
    </React.Fragment>
  )
}

export default Propsdemoinfun

