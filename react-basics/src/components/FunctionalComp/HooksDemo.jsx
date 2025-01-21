import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router'
import Nav from 'react-bootstrap/Nav';
const HooksDemo = () => {
    let links = [
        {url:"/fun/hooks",text:"useState Hook"},
        {url:"/fun/hooks/counter",text:"useState Hook demo2"},
        {url:"/fun/hooks/usecallback",text:"useCallback, useEffect and useRef Hook"},
        {url:"/fun/hooks/usememo",text:"useMemo Hook"},
        {url:"/fun/hooks/useimperativehandle",text:"useimperativehandle Hook"},
        {url:"/fun/hooks/usetransition",text:"usetransition hook"},
        {url:"/fun/hooks/useeffect",text:"useEffect clean up hook"},
        {url:"/fun/hooks/useContext",text:"useContext hook"}
      
    ]
  return (
    <Row>
        <Col xs={3}>
        <Nav className="flex-column">
            {links.map((link,index)=><Nav.Link key={index} as={NavLink} to={link.url}
             style={({ isActive }) => ({
                color: isActive ? "red" : "",
                backgroundColor:isActive?"yellow":'',
                fontWeight: isActive ? "bold":""
              })} end
            >{link.text} </Nav.Link>)}

    </Nav>
        </Col>
        <Col> <Outlet/> </Col>
     
    </Row>
  )
}

export default HooksDemo
