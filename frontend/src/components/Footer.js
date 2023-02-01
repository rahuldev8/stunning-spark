import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import { Box } from './FooterStyles'

const Footer = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    
    <footer>
      <h4 align="right">
        <Container>
            <Nav className='mx-auto'>
            <LinkContainer to='https://www.linkedin.com/in/rahul-sundararaj-016536214/'>
                <Nav.Link>
                  <i className="fa-brands fa-linkedin"></i> Linkedin
                </Nav.Link>
            </LinkContainer>

            <LinkContainer to='https://github.com/Dev-jr-8'>
                <Nav.Link>
                  <i className="fa-brands fa-github"></i> GitHub
                </Nav.Link>
              </LinkContainer>
            </Nav>
        </Container>
        </h4>
    </footer>
    
  )
}

export default Footer