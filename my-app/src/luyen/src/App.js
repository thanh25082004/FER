import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Quiz from "./components/Quiz";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Quiz App</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Quiz
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
