import React from 'react'
// import cssmodule from '../../app.module.css'
const CSSStyles = () => {
    let styles = {
        backgroundColor:"lightblue",
        textAlign:"center",
        fontWeight:"bold"
    }
  return (
   <>
       <h1 style = { { color:"orange" , textDecoration:"line-through"} }>Inline CSS</h1>

       <p style = {styles} className='success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque quod saepe impedit. Placeat sed architecto sit, soluta cum, exercitationem necessitatibus praesentium maiores autem nam ut optio asperiores similique! Unde.</p>
       <br/>
        <h3>rljtejt</h3>
        <h4 style={styles}>;jktlrjetje</h4>
        <div>3ljrlkjkhjtklehtkhekh</div>
        {/* <h2 className={cssmodule.error}>Welcome to LRA</h2> */}
   </>
  )
}

export default CSSStyles
