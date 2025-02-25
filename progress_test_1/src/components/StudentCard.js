import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const StudentCard = ({ name, studentId, location, image }) => {
  const [status, setStatus] = useState("");

  return (
    <Card style={{ width: "18rem" }} className="text-center mx-auto my-3">
      <Card.Img variant="top" src={image} style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Text className="fw-bold">{studentId}</Card.Text>
        <Card.Text>{name}</Card.Text>
        <Card.Text className="text-muted">{location}</Card.Text>
        <Form>
          <Form.Check
            type="radio"
            label="Absent"
            name={`status-${studentId}`}
            onChange={() => setStatus("Absent")}
          />
          <Form.Check
            type="radio"
            label="Present"
            name={`status-${studentId}`}
            onChange={() => setStatus("Present")}
          />
        </Form>
        <Button variant="warning" className="mt-2">Submit</Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
