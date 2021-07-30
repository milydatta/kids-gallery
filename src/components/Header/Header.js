import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';


const Header = () => {
    
    return (
      <div>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
           <Navbar.Brand href="#home">Kids Gallery</Navbar.Brand>
           <Nav className="ml-auto">
             <Link className="link text-dark" to="/home">Home</Link>
            <Link className="link text-dark" to="/orders">Orders</Link>
            <Link className="link text-dark" to="/admin">Admin</Link>
            <Link className="link text-dark" to="/deals">Deals</Link>
            <Link className="link" to="/login"><Button variant="success">Log IN</Button></Link>
          </Nav>
      </Container>
    </Navbar>
  </div>

    );
};

export default Header;
//<Link to="/login">Login</Link>