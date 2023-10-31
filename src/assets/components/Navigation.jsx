import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


export const Navigation = () => {
  return (
    <Navbar className="bg-danger w-100">
      <Container >
          <Nav className="bg-danger">
              <Link to="/" className='text-white text-decoration-none'>
                  🏠 Home
              </Link>
              <Link to="/contacto" className='text-white text-decoration-none'>
                  📙 Contacto
              </Link>
          </Nav>
          <Navbar.Brand >
              <Link to="/" className='text-white text-decoration-none'>
                  Happy Cake 🍰 
              </Link>
          </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
export default Navigation;
