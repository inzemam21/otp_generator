import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Message from '../components/Message'
import { generatotp } from '../actions/userActions'

const HomeScreen = () => {
  const [phone_number,setPhone_Number] = useState('')
  const [res,setRes] = useState('')
  const [err, setErr] = useState('')
  

  const submitHandler = (e) => {
      e.preventDefault()
      generatotp(phone_number).then(data => {
        if (data.error) {
            setErr(data.error)
        } else {
            setRes(data.id)
        }
    })

    setTimeout(() => {
      setErr('')
      setRes('')
      setPhone_Number('')
    },3000)
};


  return (
    <>
      <h1>Generate OTP</h1>
      { err && <Message variant='danger'>{err}</Message>}
      {res && <Message variant='success'> user otp generated with id - {res}</Message>}
            
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='phone'>
          <Form.Label>phone_number</Form.Label>
          <Form.Control
            type='phone'
            placeholder='Enter phone number'
            value={phone_number}
            onChange={(e) => setPhone_Number(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Genetare OTP
        </Button>
        </Form>       
        
  
    </>
  )
}

export default HomeScreen
