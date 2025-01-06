import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button, InputGroup } from 'react-bootstrap';
import { NavLink } from 'react-router';
const Header = () => {
  let funlinks = [
    {id:1,url:'/fun/first', text:"Function First Comp"},
    {id:2,url:'/fun/props', text:"Function props Demo"},
    {id:3,url:'/fun/state', text:"Function state demo"},
    {id:4,url:'/fun/counter', text:"Function counter app"},
    {id:5,url:'/fun/products', text:"Products"},
    {id:6,url:'/fun/list', text:"Function List Rendering Comp"},
    {id:7,url:'/fun/form/validations/regular', text:"Function Form validations"},
    {id:8,url:'/fun/form/validations/rhf', text:"React Hook Form "},
    {id:9,url:'/fun/lifting', text:"Lifting the state up"},
  ]

  return (
    <>
    <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink}  to="/"  
           style={({ isActive }) => ({
            color: isActive ? "red" : "",
            backgroundColor:isActive?"yellow":'',
            fontWeight: isActive ? "bold":""
          })}>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about" 
           style={({ isActive }) => ({
            color: isActive ? "red" : "",
            backgroundColor:isActive?"yellow":'',
            fontWeight: isActive ? "bold":""
          })}
          >About</Nav.Link>
          <NavDropdown title="Funtional Components" id="basic-nav-dropdown">
            {funlinks.map((link,index)=> 
            <Fragment key={link.id}>
                <NavDropdown.Item as={NavLink} to={link.url}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "",
                  backgroundColor:isActive?"yellow":'',
                  fontWeight: isActive ? "bold":""
                })}
                >{link.text}</NavDropdown.Item>
                {index != funlinks.length-1 &&     <NavDropdown.Divider />}
            
            </Fragment>
            )}
          </NavDropdown>

          <Nav.Link as={NavLink} to="/class/first" 
           style={({ isActive }) => ({
            color: isActive ? "red" : "",
            backgroundColor:isActive?"yellow":'',
            fontWeight: isActive ? "bold":""
          })}
          >Class Component</Nav.Link>
        </Nav>
        <Form inline>
            <InputGroup>
            <Form.Control  type="text"  placeholder="Search"   />         
            <Button type="submit" variant='danger'><i className='bi bi-search'></i></Button>
            </InputGroup>
      </Form>
        <Nav  className="ms-auto">
          <Nav.Link href="#home">Register</Nav.Link>
          <Nav.Link href="#link">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
   </Navbar>


{/* <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <div className="input-group">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-danger" type="submit"><i className='bi bi-search'></i></button>
        </div>
      </form>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
   </>
  )
}

export default Header
