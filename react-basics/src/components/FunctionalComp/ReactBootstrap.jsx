import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const ReactBootstrap = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col className='bg-danger' xs={3}>col1</Col>
        <Col className='bg-success'>col2</Col>
      </Row>
      <Button variant='danger' className='mt-4'>Click Me</Button>
    </Container>
  )
}

export default ReactBootstrap
