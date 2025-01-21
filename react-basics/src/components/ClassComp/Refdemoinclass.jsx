import React, { Component, createRef } from 'react'

export default class Refdemoinclass extends Component {
  constructor(props) {
    super(props) 
    this.state = {}
    this.myRef = createRef()
    this.focusRef = createRef() 
    this.interval  = ''
  }
  
  handleRef =()=>{ alert(this.myRef.current.value) }

  componentDidMount(){
    this.focusRef.current.focus()
    this.interval = setInterval(()=>{
      console.log("Interval called")
    },3000)
  }
  componentWillUnmount(){
    console.log("interval cleared")
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>
        <h1>Ref Demo</h1>
        <input type="text" className="form-control" ref={this.focusRef}/>

        <div className="mb-4">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" defaultValue="Ram" ref={this.myRef}/>
            </div>
            <button type="button" class="btn btn-primary" onClick={this.handleRef} > click Me </button>
      </div>
    )
  }
}
