import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Footer = () => {
  const dispatch = useDispatch()

  
  return (
    
    <footer>
      <h4 align="right">
        <Container>
            <Nav className='mx-auto'>

            <Navbar.Brand>
            <a className="fa-brands fa-linkedin" href="https://www.linkedin.com/in/rahul-sundararaj-016536214/">
            Linkedin
            </a>
            </Navbar.Brand>

            </Nav>
        </Container> 

        <Container>
        <Navbar.Brand>
            <a className="fa-brands fa-github" href="https://github.com/Dev-jr-8">
            GitHub
            </a>
            </Navbar.Brand> 
        </Container>    
            
              
          
            
        </h4>
    </footer>
    
  )
}

export default Footer