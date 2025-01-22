import React, { Component } from 'react'
import PageNotFound from '../../PageNotFound';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false ,errorMsg:"" };
      }
    
      static getDerivedStateFromError(error) {
           return { hasError: true };
      }
    
      componentDidCatch(error) {
        console.log(error.message)
        this.setState({errorMsg:error.message})
      }
    
      render() {
        if (this.state.hasError) {
        //   return <h1>Invalid Name</h1>;
        // return <h1>{this.state.errorMsg}</h1>
        return <PageNotFound error={this.state.errorMsg} />
        }
    
        return this.props.children; 
      }
}
