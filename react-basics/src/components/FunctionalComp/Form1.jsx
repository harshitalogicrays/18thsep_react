import React, { useState } from 'react'
import RegisterImg from '../../assets/images/register.png'
const Form1 = () => {
    let [user,setUser] = useState({username:'',email:'',password:'',cpassword:''})
    let [errors,setErrors] =useState({})
    let handleChange = (e)=>{
        // console.log(e)
        setUser({...user,[e.target.name]:e.target.value}) //user = {email:"ram1"}
    }

    let checkUsername =()=>{
        if(user.username==''){
          setErrors((preverr)=>({...preverr,username:"username is required"}))
          return false
        }
        else {
            setErrors((preverr)=>({...preverr,username:""}));return true
        }
    }

    let checkemail =()=>{
        if(user.email==''){
            setErrors((preverr)=>({...preverr,email:"email is required"}));return false;
        }
        else {
            setErrors((preverr)=>({...preverr,email:""}));return true
        }
    }
    let handleSubmit = (e)=>{
        e.preventDefault()
       let un= checkUsername();let em= checkemail()
       if(un==false || em==false){e.preventDefault()}
      else {
        console.log(user)
      }
    }
  return (
    <div className='container mt-5 shadow p-2'>
        <h1>Form using Bootstrap</h1><hr/>
      <div className="row">
        <div className="col-4">
            <img src={RegisterImg} className='img-fluid'/>
        </div>
        <div className="col">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div class="mb-3 col">
                        <label for="" class="form-label">Username</label>
                        <input type="text" name="username"  class="form-control" 
                        value={user.username} onChange={handleChange} onBlur={checkUsername}/>
                       {errors?.username && <small  class="text-danger">{errors.username}</small> } 
                    </div>
                    <div class="mb-3 col">
                        <label for="" class="form-label">Email</label>
                        <input type="text" name="email"  class="form-control" 
                        value={user.email} onChange={handleChange} onBlur={checkemail}/>
                        {errors?.email && <small  class="text-danger">{errors.email}</small> } 
                    </div>
                </div>
               
                <div class="mb-3">
                    <label for="" class="form-label">Password</label>
                    <input type="password" name="password"  class="form-control" 
                    value={user.password} onChange={handleChange}/>
                    <small  class="text-danger">Help text</small>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Confirm Password</label>
                    <input type="password" name="cpassword"  class="form-control" 
                    value={user.cpassword} onChange={handleChange}/>
                    <small  class="text-danger">Help text</small>
                </div>
                <button type="submit" class="btn btn-primary" > Submit </button>
                
            </form>
        </div>
      </div>
    </div>
  )
}

export default Form1
