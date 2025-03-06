import React, { createContext, useReducer, useEffect, useState } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [
    {
      id: 1,
      question: "Ai là người đẹp trai nhất lớp?",
      options: ["Hưng", "Thanh", "Vỹ", "Triển"],
      answer: "Thanh",
    },
    {
      id: 2,
      question: "Ai ngu nhất?",
      options: ["Triển", "Vỹ", "Hưng", "Thanh"],
      answer: "Triển",
    },
    {
      id: 3,
      question: "Ai to nhất?",
      options: ["Thanh", "Triển", "Vỹ", "Hưng"],
      answer: "Hưng",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION":
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      const nextQuestion = state.currentQuestion + 1;

      if (nextQuestion >= state.questions.length) {
        return { ...state, showScore: true, score: isCorrect ? state.score + 1 : state.score };
      }

      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: nextQuestion,
        selectedOption: "",
      };

    case "RESTART_QUIZ":
      return { ...initialState };

    default:
      return state;
  }
}

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (state.showScore) return;

    if (timeLeft === 0) {
      dispatch({ type: "NEXT_QUESTION" });
      setTimeLeft(10);
      return;
    }

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, state.showScore]);

  return (
    <QuizContext.Provider value={{ state, dispatch, timeLeft, setTimeLeft }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
