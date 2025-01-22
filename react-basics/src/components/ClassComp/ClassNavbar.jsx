import React, { Component } from 'react'
import { NavLink } from 'react-router'
import Nav from 'react-bootstrap/Nav';
export default class ClassNavbar extends Component {
    links = [
        {url:"/class",text:"First Class Comp"},
        {url:"/class/props",text:"Props Class Comp"},
        {url:"/class/stateandevent",text:"state and event Class Comp"},
        {url:"/class/form",text:"form Class Comp"},
        {url:"/class/form/validations",text:"validations in Class Comp"},
        {url:"/class/ref",text:"ref Class Comp"},
        {url:"/class/lifecycle",text:"life cycle Class Comp"},
        {url:"/class/pure",text:"pure Class Comp"},
        {url:"/class/error",text:"Error Boundary"},
        {url:"/class/hoc",text:"Higher Order Component"},

    ]
  render() {
    return (
        <Nav className="flex-column">
        {this.links.map((link,index)=><Nav.Link key={index} as={NavLink} to={link.url}
         style={({ isActive }) => ({
            color: isActive ? "red" : "",
            backgroundColor:isActive?"yellow":'',
            fontWeight: isActive ? "bold":""
          })} end
        >{link.text} </Nav.Link>)}

</Nav>
    )
  }
}
