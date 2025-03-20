import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./Contact.css"; // File CSS riêng

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="mt-4">
      <h2>Contact</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* First Name */}
          <Col md="4">
            <Form.Group controlId="validationFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" placeholder="First name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Last Name */}
          <Col md="4">
            <Form.Group controlId="validationLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" placeholder="Last name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Username */}
          <Col md="4">
            <Form.Group controlId="validationUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control required type="text" placeholder="Username" />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          {/* City */}
          <Col md="4">
            <Form.Group controlId="validationCity">
              <Form.Label>City</Form.Label>
              <Form.Control required type="text" placeholder="City" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* State */}
          <Col md="4">
            <Form.Group controlId="validationState">
              <Form.Label>State</Form.Label>
              <Form.Control required type="text" placeholder="State" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Zip */}
          <Col md="4">
            <Form.Group controlId="validationZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control required type="text" placeholder="Zip" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Checkbox */}
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        {/* Submit Button */}
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
};

export default Contact;
