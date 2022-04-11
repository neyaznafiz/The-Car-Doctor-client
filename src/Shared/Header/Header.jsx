import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Images/logo/logo.png'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
    <Container>
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav className="me-auto">

    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          height="50"
          className="d-inline-block align-top"
        />{' '}
    
      </Navbar.Brand>
    </Container>

      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    );
};

export default Header;