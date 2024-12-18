import React from 'react'

const Propsdemoinfun = (props) => {
    console.log(props)
    // props.username = "Sad"//props are read only
  return (
    <div>
        <h1>Props Demo</h1>
        <h2>{props.username}</h2>
        <h3>{props.address}</h3>
    </div>
  )
}

export default Propsdemoinfun

