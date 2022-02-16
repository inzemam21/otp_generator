import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import RegisterScreen from './screens/RegisterScreen'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import VerifyOptScreen from './screens/VerifyOptScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          
          <Route path='/register' component={RegisterScreen} />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/verifyotp' component={VerifyOptScreen} />
            
        </Container>
      </main>
 
    </Router>
  )
}

export default App
