import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer text-center p-4">
      <Container>
        <p>Our Address</p>
        <p>Da Nang, Vietnam</p>
        <p>Email: info@ftu.edu.vn | Phone: +84 123 456 789</p>
        <div className="social-icons">
          <i className="bi bi-facebook mx-2"></i>
          <i className="bi bi-twitter mx-2"></i>
          <i className="bi bi-instagram mx-2"></i>
        </div>
        <p>© Copyright 2023</p>
      </Container>
    </footer>
  );
}

export default Footer;
