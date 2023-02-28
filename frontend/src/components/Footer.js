import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { logout } from '../actions/userActions'
import SocialFollow from './SocialLink'

const Footer = () => {
  const dispatch = useDispatch()

  return (
    <footer className="footer">
      <SocialFollow />
    </footer>
    
  )
}

export default Footer