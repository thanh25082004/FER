import React from "react";
import { Container } from "react-bootstrap";
import Counter from "./components/Counter";
import ChangeNameAge from "./components/ChangeNameAge";
import ItemList from "./components/ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionBank from "./components/QuestionBank";

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Container style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>React useReducer Exercises</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Counter />
          <ChangeNameAge />
          <ItemList />
          <QuestionBank />
        </div>
      </Container>
    </div>
  );
}

export default App; 