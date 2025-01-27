import React, { use, useContext } from 'react'
import { context1 } from '../MyContext'

const Home = () => {
  // const condata = useContext(context1)
    // const condata = use(context1)
  return (
    <div>
      <h1>Home Page</h1>
      {/* <h2>{condata}</h2> */}
    </div>
  )
}

export default Home
