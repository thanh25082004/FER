import React, { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";

const questions = [
  {
    question: "Bạn có hài lòng với dịch vụ của chúng tôi?",
    options: ["Có hài lòng", "Rất hài lòng", "Vô cùng tốt"],
  },
];

function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedAnswer) {
      setSubmitted(true);
    }
  };

  return (
    <Container className="mt-4">
      <Card className="shadow-lg p-4">
        <h2 className="text-center mb-4">Quiz Page</h2>
        {questions.map((q, index) => (
          <div key={index}>
            <h4 className="mb-3">{q.question}</h4>
            <Form>
              {q.options.map((option, i) => (
                <Form.Check
                  key={i}
                  type="radio"
                  label={option}
                  name="quiz-option"
                  className="mb-2"
                  onChange={() => {
                    setSelectedAnswer(option);
                    setSubmitted(false);
                  }}
                />
              ))}
            </Form>
          </div>
        ))}
        <Button
          variant="primary"
          className="mt-3"
          onClick={handleSubmit}
          disabled={!selectedAnswer}
        >
          Submit
        </Button>

        {submitted && (
          <Alert variant="success" className="mt-3">
            cảm ơn bạn đã đánh giá . 
          </Alert>
        )}
      </Card>
    </Container>
  );
}

export default Quiz;
