import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Button, Offcanvas, Dropdown } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect={"true"} expand="lg">
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            data-toggle="collapse"
            data-target="responsive-navbar-nav"
            aria-controls="responsive-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <Navbar.Brand>
            <Link to="/Home#homeLink">#robertTran</Link>
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link eventKey="2">
                <Link to="/Home#homeLink">Home</Link>
              </Nav.Link>
              <Nav.Link eventKey="2">
                <Link to="/Home#professionalLink">Professional</Link>
              </Nav.Link>
              <Nav.Link eventKey="2">
                <Link to="/Home#educationAndExperienceLink">
                  Education & Experience
                </Link>
              </Nav.Link>
              <Nav.Link eventKey="2">
                <Link to="/Home#contactLink">Contact</Link>
              </Nav.Link>
              <Nav.Link eventKey="2">
                <Link to="/Portfolios">Portfolio</Link>
              </Nav.Link>
              <Nav.Link eventKey="2">
                <Link to="/Blogs#blogLink">Blog</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
