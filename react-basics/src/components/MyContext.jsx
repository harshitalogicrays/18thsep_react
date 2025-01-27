import React, { Component } from 'react'
import { createContext } from 'react'
export const context1 = createContext()
export default class MyContext extends Component {
    constructor(props) {
      super(props)
      this.state = {username:"Rekha"}
    }
    changeUserName =(val)=>this.setState({username:val})
  render() {
    return (  
    // <context1.Provider value="Hello">
    //         {this.props.children}
    //   </context1.Provider> 

    <context1.Provider value={{username:this.state.username , changeUserName:this.changeUserName}}>
            {this.props.children}
      </context1.Provider>
    )
  }
}
