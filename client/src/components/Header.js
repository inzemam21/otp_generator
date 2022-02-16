import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {

  return (
    <header>
      <Navbar bg='dark-grey' variant='grey' expand='lg' style={{borderBottom: '1px solid black'}} collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>OTP GENERATOR</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/register'>
                <Nav.Link>
                  Register a User
                </Nav.Link>
              </LinkContainer>  
              <LinkContainer to='/verifyotp'>
                <Nav.Link>
                  Verify otp
                </Nav.Link>
              </LinkContainer>       
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

