import React, { useContext } from "react";
import QuizContext from "./QuizProvider";
import Answer from "./Answer";

const Question = () => {
  const { state } = useContext(QuizContext);

  return (
    <div>
      <h5 className="text-primary">{state.questions[state.currentQuestion].question}</h5>
      {state.questions[state.currentQuestion].options.map((option, index) => (
        <Answer key={index} option={option} />
      ))}
    </div>
  );
};

export default Question;
