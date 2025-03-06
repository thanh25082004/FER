import React, { useContext } from "react";
import { Button, Badge } from "react-bootstrap";
import QuizContext from "./QuizProvider";

const Score = () => {
  const { state, dispatch } = useContext(QuizContext);

  return (
    <div>
      <h2 className="text-danger">Quiz Completed!</h2>
      <h4>
        Your score: <Badge bg="primary">{state.score} / {state.questions.length}</Badge>
      </h4>
      <Button variant="danger" className="mt-3" onClick={() => dispatch({ type: "RESTART_QUIZ" })}>
        Try Again
      </Button>
    </div>
  );
};

export default Score;
