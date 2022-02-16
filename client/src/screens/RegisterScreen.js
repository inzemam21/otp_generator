import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [phone_number, setphone_number] = useState('')
  const [err, seterr] = useState('')
  const [res, setres] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()
    
     register(name,phone_number).then(data => {
      if (data.error) {
          seterr(data.error);
      } else {
          setres(data.id)
      }
  })

  setTimeout(() => {
    seterr('')
    setres('')
  },3000)
  
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {err && <Message variant='danger'>{err}</Message>}
      {res && <Message variant='success'>user created with following id -{res}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='phone'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='phone'
            placeholder='Enter phone number'
            value={phone_number}
            onChange={(e) => setphone_number(e.target.value)}
          ></Form.Control>
        </Form.Group>

        

        
        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>

    </FormContainer>
  )
}

export default RegisterScreen
