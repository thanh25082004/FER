import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function FullForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(name.length > 0 && gender !== "" && country !== "" && termsAccepted);
  }, [name, gender, country, termsAccepted]);

  return (
    <Form>
      <h4>Exercise 6</h4>

      <Form.Group controlId="name">
        <Form.Label>Họ và Tên</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="gender" className="mt-3">
        <Form.Label>Giới tính</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Nam"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            label="Nữ"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="country" className="mt-3">
        <Form.Label>Quốc gia</Form.Label>
        <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Chọn quốc gia</option>
          <option value="VN">Việt Nam</option>
          <option value="US">Thái Lan</option>
          <option value="JP">Hàn Quốc</option>
          <option value="JP">Trung Quốc</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="terms" className="mt-3">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3" disabled={!formValid}>
        Gửi Form
      </Button>
    </Form>
  );
}

export default FullForm;
