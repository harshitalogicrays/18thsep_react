import axios from 'axios'
import React, { Component } from 'react'

export default class UsersAPI extends Component {
    constructor(props) {
      super(props) 
      this.state = { data:[] }
    }
    
   /* getData=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then(d=>{ console.log(d)
            this.setState({data:d})
        })
        .catch(err=>console.log(err))
    } */

       /* getData = async()=>{
            try{
                let response = await fetch("https://jsonplaceholder.typicode.com/users")
                let d = await response.json()
                this.setState({data:d})
            }
            catch(err){console.log(err)}
        } */

           /* getData = ()=>{
                axios.get("https://jsonplaceholder.typicode.com/users")
                .then((res)=>{console.log(res)
                    this.setState({data:res.data})
                })
                .catch(err=>console.log(err))
            } */

                getData = async()=>{
                    try{
                        let res = await  axios.get("https://jsonplaceholder.typicode.com/users")
                        this.setState({data:res.data})
                    }
                    catch(err){  console.log(err) }
                }

    componentDidMount(){ this.getData()   }
    
  render() {
    return (
      <div>
        <h1>Users Data</h1>
        <div  class="table-responsive" >
            <table class="table table-bordered table-striped table-hover" >
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>USername</th>
                        <th>Email</th><th>Phone</th><th>company name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.length==0 && <tr><td colSpan={6}>No User Found</td></tr>}
                    {this.state.data.map((user,i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.company.name}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        
      </div>
    )
  }
}
