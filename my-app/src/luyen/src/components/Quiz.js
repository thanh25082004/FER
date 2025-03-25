import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleSelectOption = (questionId, optionIndex) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, selectedOption: optionIndex } : q
      )
    );
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Quiz Game</h2>
      <Row className="justify-content-center">
        {questions.map((q) => (
          <Col md={8} key={q.id}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">{q.text}</Card.Title>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {q.options.map((option, index) => (
                    <Button
                      key={index}
                      variant={
                        q.selectedOption === index
                          ? index === q.correctAnswerIndex
                            ? "success"
                            : "danger"
                          : "outline-secondary"
                      }
                      className="me-2"
                      onClick={() => handleSelectOption(q.id, index)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
                {q.selectedOption !== undefined && (
                  <p className="mt-3 fw-bold">
                    {q.selectedOption === q.correctAnswerIndex
                      ? "✅ Correct! Well done!"
                      : `❌ Wrong! The correct answer is: ${q.options[q.correctAnswerIndex]}`}
                  </p>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Quiz;
