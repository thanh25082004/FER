import React, { useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";

function MyAlert() {
  const [show, setShow] = useState(false);

  return (
    <Container className="text-center mt-4">
      <Button onClick={() => setShow(true)} variant="warning">Show Alert</Button>
      {show && (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Success!</Alert.Heading>
          <p>This is a success alert—check it out!</p>
        </Alert>
      )}
    </Container>
  );
}

export default MyAlert;

