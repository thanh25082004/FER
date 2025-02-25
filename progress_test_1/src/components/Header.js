import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="px-4">
      <Navbar.Brand href="#">
        <img src="https://tse1.mm.bing.net/th?id=OIP.Yu8VDzdUVw3AlQPWbKdavgHaEO&pid=Api&P=0&h=220" alt="Logo" width="80" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">English Test</Nav.Link>
          <Nav.Link href="#">Students</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="me-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
