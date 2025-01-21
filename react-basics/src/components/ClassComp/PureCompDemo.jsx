import React, { Component, PureComponent } from 'react'

export default class PureCompDemo extends PureComponent {
  constructor(props) {
     super(props) 
     this.state = {username:"Ram"}
   }

   handleChange = ()=>{ 
    console.log("handlechange called")
    this.setState({username:"Meera"})
   }
   render() {
    console.log("render called")
     return (
       <div>
             <button type="button" class="btn btn-primary" onClick={this.handleChange}> change name </button>
             <h1>{this.state.username}</h1>
       </div>
     )
   }
}
