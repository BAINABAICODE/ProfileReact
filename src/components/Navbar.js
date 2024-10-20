import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/profile.png';  // Import the logo
import './NavbarComponent.css'; // Import your CSS file

const NavbarComponent = () => {
    const location = useLocation(); // Get the current location
//..
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                {/* Add the logo image here */}
                <img 
                    src={logo} 
                    alt="Logo" 
                    width="40"   // Set desired width
                    height="40"  // Set desired height
                    className="d-inline-block align-top me-2" // Margin for spacing
                />
                Languita Nilbert
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Nav.Link>
                    <Nav.Link as={Link} to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
