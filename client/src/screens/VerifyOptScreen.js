import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { verifyOtp } from '../actions/userActions';

const VerifyOptScreen = () => {
    const [otp, setOtp] = useState('')
    const [id, setId] = useState('')
    const [err, setErr] = useState('')
    const [res, setRes] = useState('')
  
    const submitHandler = (e) => {
      e.preventDefault()
      verifyOtp(id,otp).then(data => {
        if (data.error) {
            setErr(data.error);
        } else {
            setRes(data.id)
        }
    })

    setTimeout(() => {
      setErr('')
      setRes('')
      setId('')
      setOtp('')
    },3000)
        
    
    }
  
    return (
      <FormContainer>
        <h1>Verify OTP</h1>
        {err && <Message variant='danger'>{err}</Message>}
        {res && <Message variant='success'>{res}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='id'>
            <Form.Label>ID</Form.Label>
            <Form.Control
              type='id'
              placeholder='Enter ID'
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='otp'>
            <Form.Label>OTP</Form.Label>
            <Form.Control
              type='otp'
              placeholder='Enter OTP'
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            ></Form.Control>
          </Form.Group>
         
          <Button type='submit' variant='primary'>
            Register
          </Button>
        </Form>
  
      </FormContainer>
    )
};

export default VerifyOptScreen;
