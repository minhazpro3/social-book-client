import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark">
        <Container>
          <Navbar.Brand className="text-white">SOCIAL_BOOK</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-white">
              {/* <Link to="/">Home</Link> */}
            </Nav>
            <Nav>
              <Link to="home" className="text-white text-decoration-none ms-2">
                Home
              </Link>
              <Link
                to="register"
                className="text-white text-decoration-none ms-2"
              >
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
