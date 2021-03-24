import React, { Fragment } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = ({ history }) => {
  return (
    <Fragment>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
        sticky="top"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>API Calling</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link> Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/api">
                <Nav.Link> Api</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
