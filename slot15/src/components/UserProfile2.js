import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container } from "react-bootstrap";

const UserProfile2 = ({ name, age, onSubmit }) => {
  const [formData, setFormData] = useState({ name, age });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Tên là bắt buộc";
    if (!formData.age) newErrors.age = "Tuổi không được để trống!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) onSubmit(formData);
  };

  return (
    <Container>
      <h3>Thông Tin Người Dùng</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control type="text" name="age" value={formData.age} onChange={handleChange} isInvalid={!!errors.age} />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">Gửi</Button>
      </Form>
    </Container>
  );
};

UserProfile2.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSubmit: PropTypes.func.isRequired,
};

export default UserProfile2;
