import React, { useContext } from "react";
import { Container, Card, Button, ProgressBar } from "react-bootstrap";
import QuizContext from "./QuizProvider";
import Question from "./Question";
import Score from "./Score";

const Quiz = () => {
  const { state, dispatch, timeLeft, setTimeLeft } = useContext(QuizContext);

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card className="p-4 shadow-lg rounded text-center w-50 bg-light">
        {state.showScore ? (
          <Score />
        ) : (
          <div>
            <h4 className="mb-2 text-danger">
              Question {state.currentQuestion + 1} / {state.questions.length}
            </h4>
            <ProgressBar
              now={(timeLeft / 10) * 100}
              variant={timeLeft > 5 ? "success" : timeLeft > 2 ? "warning" : "danger"}
              className="my-3"
            />
            <Question />
            <div className="text-muted mt-2">Time Left: {timeLeft}s</div>
            <Button
              className="mt-3"
              variant="primary"
              disabled={!state.selectedOption}
              onClick={() => {
                dispatch({ type: "NEXT_QUESTION" });
                setTimeLeft(10);
              }}
            >
              {state.currentQuestion === state.questions.length - 1 ? "Finish Quiz" : "Next"}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default Quiz;
