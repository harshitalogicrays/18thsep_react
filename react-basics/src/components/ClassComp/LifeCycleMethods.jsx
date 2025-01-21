import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
  constructor(props) {
    super(props)
    console.log("constructor called")
    this.state = {count:1}
    this.interval = ''
  }
  
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps called",state)
    return {state}
  }

  componentDidMount(){
    console.log("componentDidMount called")
   this.interval =  setInterval(()=>{
      console.log("Interval called")
      this.setState({count:this.state.count+1})
    },3000)
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate called")
    if(nextState.count <= 10) return true
   else return false
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate called",prevState)
  }

  componentDidUpdate(){
    console.log("componentDidUpdate called")
  }

  componentWillUnmount(){
    console.log("componentWillUnmount called");
    clearInterval(this.interval)
  }
  render() {
    console.log("render called")
    return (
      <div>
        <h1>Life Cycle Methods</h1>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
