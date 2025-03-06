import React, { useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";

function MyModal() {
  const [show, setShow] = useState(false);

  return (
    <Container className="text-center mt-4">
      <Button variant="primary" onClick={() => setShow(true)}>
        Open Modal
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a modal example!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default MyModal;
