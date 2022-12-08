import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const NavbarHeader = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/BlogPost">Blog Post</Nav.Link>
            <Nav.Link href="/AboutMe">About Me</Nav.Link>
            <Nav.Link href="/ContactMe">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavbarHeader;