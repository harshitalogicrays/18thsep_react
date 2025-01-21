import React, { Component } from 'react'
import Image1 from '../../assets/images/a.jpg'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
export default class StateandEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {count:1,num1:'',num2:'',result:0}
  }
  handleCounter=()=>{
    //  this.setState({ count: this.state.count + 1 });
     this.setState((prevState)=> ({count: prevState.count + 1}) )
  }
  
  handleClick(){ alert("handleClick called")}
  handleAdd =(a,b)=>{alert(a+b)}
  render() {
    return (
      <div>
        <h1>State and Event Demo</h1>
        <>
            <button type="button" class="btn btn-primary me-2" onClick={()=>alert("Button clicked")}>Click Me</button>
            <button type="button" class="btn btn-danger me-2" onClick={this.handleClick}>Click Me</button>
            <button type="button" class="btn btn-danger me-2" onClick={()=>this.handleClick()}>Click Me</button>
            <button type="button" class="btn btn-info me-2" onClick={()=>this.handleAdd(2,3)}>Add</button>
            <hr/>
           
        </>
        <>        
        <button type="button" class="btn btn-danger me-2" onClick={this.handleCounter}>Counter</button>
        <h1>Count:{this.state.count}</h1>
        </>

          <Row>
            <Col xs={4}><Image src={Image1} fluid/></Col>
            <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Num1</Form.Label>
                <Form.Control name="num1" value={this.state.num1} 
                onChange={(e)=>this.setState({num1:e.target.value})}></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Num1</Form.Label>
                <Form.Control name="num2" value={this.state.num2}
                 onChange={(e)=>this.setState({num2:e.target.value})}></Form.Control>
              </Form.Group>
              <Button type="button" onClick={()=>this.setState({result:parseInt(this.state.num1) + parseInt(this.state.num2)})}>Add</Button>
              <h1>Result: {this.state.result}</h1>
            </Col>
        </Row>
      </div>
    )
  }
}
