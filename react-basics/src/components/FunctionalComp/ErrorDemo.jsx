import React, { Component } from 'react'
import ErrorDemoChild from './ErrorDemoChild'
import ErrorBoundary from '../ClassComp/ErrorBoundary'

export default class ErrorDemo extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary> <ErrorDemoChild username="Amit"/></ErrorBoundary>
        
        <ErrorBoundary> <ErrorDemoChild username="Sachin"/></ErrorBoundary>

        <ErrorBoundary> <ErrorDemoChild username="Joker"/></ErrorBoundary>
        
         <ErrorDemoChild username="Harshita"/>
      
      </div>
    )
  }
}
