import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import QuizContext from "./QuizProvider";

const Answer = ({ option }) => {
  const { state, dispatch } = useContext(QuizContext);

  return (
    <Button
      className="d-block w-100 my-2 p-2"
      style={{
        backgroundColor: state.selectedOption === option ? "#ff69b4" : "#fff0f5",
        border: "1px solid #ff69b4",
        color: state.selectedOption === option ? "white" : "#ff1493",
        fontWeight: "bold",
      }}
      onClick={() => dispatch({ type: "SELECT_OPTION", payload: option })}
    >
      {option}
    </Button>
  );
};

export default Answer;
