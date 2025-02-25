import React from "react";

function Question({ questionData, onAnswer }) {
  return (
    <div className="question-card">
      <h2>{questionData.question}</h2>
      <div className="options">
        {questionData.options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
