import React, { useState } from 'react'
import RegisterImg from '../../assets/images/register.png'
const Form2 = () => {
    let [user,setUser] = useState({username:'ram',email:'ram@test.com',password:'',cpassword:''})
    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log(user)
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
                        value={user.username} onChange={(e)=> setUser({...user,username:e.target.value})}/>
                        <small  class="text-danger">Help text</small>
                    </div>
                    <div class="mb-3 col">
                        <label for="" class="form-label">Email</label>
                        <input type="text" name="email"  class="form-control" 
                        value={user.email} onChange={(e)=> setUser({...user,email:e.target.value})}/>
                        <small  class="text-danger">Help text</small>
                    </div>
                </div>
               
                <div class="mb-3">
                    <label for="" class="form-label">Password</label>
                    <input type="password" name="password"  class="form-control" 
                    value={user.password} onChange={(e)=> setUser({...user,password:e.target.value})}/>
                    <small  class="text-danger">Help text</small>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Confirm Password</label>
                    <input type="password" name="cpassword"  class="form-control" 
                    value={user.cpassword} onChange={(e)=> setUser({...user,cpassword:e.target.value})}/>
                    <small  class="text-danger">Help text</small>
                </div>
                <button type="submit" class="btn btn-primary" > Submit </button>
                
            </form>
        </div>
      </div>
    </div>
  )
}

export default Form2
