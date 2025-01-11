import React from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'
import  Container  from 'react-bootstrap/Container'
import RegisterImg from '../../assets/images/register.png'
import { useForm } from 'react-hook-form'
const Register = () => {
    const {register,handleSubmit,getValues ,  formState: { errors },trigger} = useForm()
    let submitData=(user)=>{
        // console.log(getValues())
        console.log(user)
    }
  return (
    <Container className='mt-5 shadow p-3'> <h1>Signup Form</h1><hr/>
        <Row><Col xs={4}><Image src={RegisterImg} fluid/></Col>
            <Col> <Form onSubmit={handleSubmit(submitData)}>
                    <Row> <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" 
                            {...register('username' , {required : "username is required" ,
                                minLength : {value:5,message:"min 5 char"},
                                maxLength :{value:20,message:"max 20 char"},
                                pattern :{value:/^[a-zA-Z]+$/ ,message:"alphabets only"}
                             } )}
                            onBlur={()=>trigger('username')}
                            ></Form.Control>
                             {errors.username && <small  class="text-danger">{errors.username.message}</small> } 
                        </Form.Group></Col>
                        <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email"  
                            {...register('email' , {required:"email is required" ,
                                pattern :{value:/^[\w\.]+\@[\w]+\.[a-zA-Z]{2,3}$/ , message:"Invalid email"}
                            })}      onBlur={()=>trigger('email')}></Form.Control>
                             {errors.email && <small  class="text-danger">{errors.email.message}</small> } 
                         </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"
                         {...register('password' , {required:"Password is required"})} onBlur={()=>trigger('password')}></Form.Control>
                           {errors.password && <small  class="text-danger">{errors.password.message}</small> } 
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="cpassword"
                         {...register('cpassword', {required:true,
                            validate:(cpwd)=>{
                                let {password} =getValues()
                               return password != cpwd && "password not match"
                            }
                         })}  
                         onBlur={()=>trigger('cpassword')}></Form.Control>
                          {errors.cpassword && <small  class="text-danger">{errors.cpassword.message}</small> }
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

export default Register
