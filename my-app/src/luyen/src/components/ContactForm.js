import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(message);
    setMessage("");
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2 w-100">
          Send Message
        </Button>
      </Form>
      {submittedMessage && (
        <Alert variant="success" className="mt-3">
          Your message: {submittedMessage}
        </Alert>
      )}
    </Container>
  );
};

export default ContactForm;
