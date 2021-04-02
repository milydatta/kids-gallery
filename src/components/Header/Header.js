import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';


const Header = () => {
    
    return (
      <div>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
           <Navbar.Brand href="#home">Kids Gallery</Navbar.Brand>
           <Nav className="ml-auto">
             <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            <Nav.Link href="/deals">Deals</Nav.Link>
            <Nav.Link href="/login"><Button variant="success">Log IN</Button></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  </div>

    );
};

export default Header;
//<Link to="/login">Login</Link>