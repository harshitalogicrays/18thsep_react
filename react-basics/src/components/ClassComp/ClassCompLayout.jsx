import React, { Component } from 'react'
import { Outlet } from 'react-router'
import ClassNavbar from './ClassNavbar'

export default class ClassCompLayout extends Component {
  render() {
    return (
      <div className='row'>
         <div className="col-3"><ClassNavbar/></div>
       <div className="col">  <Outlet/>  </div>
      </div>
    )
  }
}
