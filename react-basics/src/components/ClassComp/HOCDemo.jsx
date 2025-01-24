import React, { Component } from 'react'
import UsersAPI from './UsersAPI'
import HigherOrderComp from './HigherOrderComp'
import HOCWrappedComp from './HOCWrappedComp'

const Users = HigherOrderComp(HOCWrappedComp,{url:"https://jsonplaceholder.typicode.com/users" ,title: "Users Data" , 
  columns:["name","email","username","phone"]
})

const Products = HigherOrderComp(HOCWrappedComp , {
  url:"https://fakestoreapi.com/products",title:"Products List",
  columns:["title","price","image","category","description"]
})

export default class HOCDemo extends Component {
  render() {
    return (
      <div>
        {/* <UsersAPI/> */}
        <Users/>
      <hr/>
      <Products/>

      </div>
    )
  }
}
