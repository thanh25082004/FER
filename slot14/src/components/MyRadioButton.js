import React, { useState } from "react";
import { Form, Alert, Container } from "react-bootstrap";

function MyRadioButton() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setShowAlert(true);
  };

  return (
    <Container className="text-center mt-4">
      <Form>
        <Form.Check type="radio" label="Option 1" value="option1" checked={selectedValue === "option1"} onChange={handleChange} />
        <Form.Check type="radio" label="Option 2" value="option2" checked={selectedValue === "option2"} onChange={handleChange} />
      </Form>
      {showAlert && (
        <Alert variant="info" className="mt-2" onClose={() => setShowAlert(false)} dismissible>
          You selected: {selectedValue}
        </Alert>
      )}
    </Container>
  );
}

export default MyRadioButton;
