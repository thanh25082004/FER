import React from "react";
import { QuizProvider } from "./components/QuizProvider";
import Quiz from "./components/Quiz";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
}

export default App;
