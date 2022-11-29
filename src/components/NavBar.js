import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "./../Hooks/useFirebase";

const NavBar = () => {
  const { user, logOut } = useFirebase();
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
              {user.email && (
                <button onClick={logOut} className=" text-decoration-none ms-2">
                  Logout
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
