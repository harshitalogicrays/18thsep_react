import React from 'react'
import errorm from './pagenotfound.module.css'
const PageNotFound = ({error=''}) => {
  return (
    <>
    <h1>{error}</h1>

    <div className={errorm.error}>
      <h1>404</h1>
      <h2>Not Found</h2>
    </div>
    </>
  )
}

export default PageNotFound
