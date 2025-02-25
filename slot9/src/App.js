import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "./components/StudentCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const students = [
    { name: "Tán quang triển", age: 18, avatar: "/images/student1.jpg" },
    { name: "Tán quang triển", age: 19, avatar: "/images/student2.jpg" },
    { name: "Tán quang triển", age: 20, avatar: "/images/student3.jpg" },
  ];

  return (
    <Container>
      <h1 className="my-4 text-center">Student Information</h1>
      <Row>
        {students.map((student, index) => (
          <Col key={index} sm={12} md={4}>
            <StudentCard student={student} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;