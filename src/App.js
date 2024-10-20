// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SubmissionSuccess from './components/SubmissionSuccess';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap styles
import './App.css';  // Custom CSS
import profileLogo from './assets/profile.png';  // Import the profile image

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-dark">
        <Container>
          {/* Adding the profile image and the brand name together */}
          <Navbar.Brand as={Link} to="/">
            <img
              src={profileLogo}  // Profile logo image
              alt="Profile"
              width="40"  // Adjust size as needed
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Languita Nilbert  {/* Brand name */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submission-success" element={<SubmissionSuccess />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
