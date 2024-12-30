import React from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'
import  Container  from 'react-bootstrap/Container'
import Register from '../../assets/images/register.png'
const Form3 = () => {
  return (
    <Container className='mt-5 shadow p-3'>
        <Row>
            <Col xs={4}><Image src={Register} fluid/></Col>
            <Col>
                <Form>
                    <Row>
                        <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username"></Form.Control>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email"></Form.Control>
                         </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="cpassword"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Gender:&emsp;</Form.Label>
                        <Form.Check inline>
                            <Form.Check.Input type="radio"  name="gender" value="male"/>
                            <Form.Check.Label>Male</Form.Check.Label>
                        </Form.Check>
                        <Form.Check inline>
                            <Form.Check.Input type="radio" name="gender" value="female"/>
                            <Form.Check.Label>Female</Form.Check.Label>
                        </Form.Check>
                        <Form.Check inline>
                            <Form.Check.Input type="radio" name="gender" value="other"/>
                            <Form.Check.Label>Other</Form.Check.Label>
                        </Form.Check>
                    </Form.Group>
                    <div className="d-grid gap-2">
                      <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Form3
