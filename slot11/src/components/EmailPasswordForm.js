import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
const validatePassword = (password) => password.length >= 8;

function EmailPasswordForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  useEffect(() => {
    setEmailValid(validateEmail(email));
    setPasswordValid(validatePassword(password));
  }, [email, password]);

  return (
    <Form className="mb-4">
      <h4>Exercise 5</h4>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isValid={emailValid && email.length > 0}
          isInvalid={!emailValid}
        />
        <Form.Control.Feedback type="invalid">Email không hợp lệ!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="password" className="mt-3">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isValid={passwordValid && password.length > 0}
          isInvalid={!passwordValid}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự!
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3" disabled={!emailValid || !passwordValid}>
        Đăng nhập
      </Button>
    </Form>
  );
}

export default EmailPasswordForm;
