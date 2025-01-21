import React, { Component } from 'react'

export default class FormValidations extends Component {
  constructor(props) {
    super(props) 
    this.state = {
       title:"Form validations Demo",
       user:{username:'',email:'',password:'',cpassword:''},
       errors:{}
    }
  }
  handleChange=(e)=>{
    this.setState({
      user: {...this.state.user,[e.target.name]:e.target.value}
    })
  }

  checkUsername =()=>{
    if(this.state.user.username==''){
      this.setState((prevState)=>({errors :{...prevState.errors,username :"username is required"} }))
        return false
    }
    else if(!/^[a-zA-Z]+$/.test(this.state.user.username)){
      this.setState((prevState)=>({errors :{...prevState.errors,username :"alphabets only"} }))
      return false
    }
    else {
      this.setState(prevState => ({
        errors: { ...prevState.errors, username: "" }
      }));return true
    }
}

checkemail =()=>{
    if(this.state.user.email==''){
      this.setState(prevState => ({
        errors: { ...prevState.errors, email: "email is required" }
      }));return false;
    }
    else {
      this.setState(prevState => ({
        errors: { ...prevState.errors, email: "" }
      }));return true
    }
}

  handleSubmit = (e)=>{
    e.preventDefault()
    let un= this.checkUsername();let em= this.checkemail()
    if(un==false || em==false){e.preventDefault()}
    else
    alert(JSON.stringify(this.state.user))
  }

  render() {
    return (
      <div className='container mt-5 shadow p-2'>
        <h1>{this.state.title}</h1><hr />
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div class="mb-3 col">
                  <label for="" class="form-label">Username</label>
                  <input type="text" name="username" class="form-control" 
                  value={this.state.user.username} onChange={this.handleChange} onBlur={this.checkUsername}/>
                {this.state.errors?.username && <span className='text-danger'>{this.state.errors.username}</span>}
                </div>
                <div class="mb-3 col">
                  <label for="" class="form-label">Email</label>
                  <input type="text" name="email" class="form-control"
                    value={this.state.user.email} onChange={this.handleChange} onBlur={this.checkemail} />
                         {this.state.errors?.email && <span className='text-danger'>{this.state.errors.email}</span>}
                </div>
              </div>

              <div class="mb-3">
                <label for="" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" 
                  value={this.state.user.password} onChange={this.handleChange}/>

              </div>
              <div class="mb-3">
                <label for="" class="form-label">Confirm Password</label>
                <input type="password" name="cpassword" class="form-control"  
                  value={this.state.user.cpassword} onChange={this.handleChange}/>
              </div>
              <button type="submit" class="btn btn-primary" > Submit </button>

            </form>
          </div>
        </div>
      </div>
    )
  }
}
