import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateInput = (value) => value.length >= 5;

function InputValidation() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (value.length === 0) {
      setIsValid(true);
      setErrorMessage("");
      return;
    }

    if (validateInput(value)) {
      setIsValid(true);
      setErrorMessage("");
    } else {
      setIsValid(false);
      setErrorMessage("Giá trị phải có ít nhất 5 ký tự!");
    }
  }, [value]);

  return (
    <Form className="mb-4">
      <h4>Exercise 4</h4>
      <Form.Group controlId="validatedInput">
        <Form.Label>Nhập một giá trị</Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isValid={isValid && value.length > 0}
          isInvalid={!isValid}
        />
        <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3" disabled={!isValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default InputValidation;
