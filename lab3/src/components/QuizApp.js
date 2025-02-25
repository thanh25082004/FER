import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const questions = [
  {
    question: "React là gì?",
    options: ["Thư viện", "Framework", "Ngôn ngữ lập trình", "Cơ sở dữ liệu"],
    answer: "Thư viện",
  },
  {
    question: "JSX là gì?",
    options: ["JavaScript XML", "JSON", "CSS", "HTML"],
    answer: "JavaScript XML",
  },
  {
    question: "Hook nào được dùng để quản lý state?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useState",
  },
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <Result score={score} total={questions.length} restartQuiz={restartQuiz} />
      ) : (
        <Question
          questionData={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default QuizApp;
