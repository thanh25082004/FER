import React, { useReducer } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: "", age: "" });

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card
        className="p-4 shadow-lg"
        style={{
          width: "1000px",
          backgroundColor: "#ffe4e1",
          border: "2px solid #ff69b4",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#ff1493", fontWeight: "bold" }}>
          User Information
        </h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#ff69b4", fontWeight: "bold" }}>Name:</Form.Label>
            <Form.Control
              type="text"
              value={state.name}
              onChange={(e) => dispatch({ type: "SET_NAME", value: e.target.value })}
              placeholder="Enter your name"
              style={{ border: "1px solid #ff69b4", backgroundColor: "#fff0f5" }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#ff69b4", fontWeight: "bold" }}>Age:</Form.Label>
            <Form.Control
              type="number"
              value={state.age}
              onChange={(e) => dispatch({ type: "SET_AGE", value: e.target.value })}
              placeholder="Enter your age"
              style={{ border: "1px solid #ff69b4", backgroundColor: "#fff0f5" }}
            />
          </Form.Group>
          <Button
            style={{
              backgroundColor: "#ff69b4",
              border: "none",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
            className="w-100"
            disabled={!state.name || !state.age}
          >
            Submit
          </Button>
        </Form>
        <div className="mt-4 text-center">
          <h3 style={{ color: "#ff1493" }}>Name: {state.name}</h3>
          <h3 style={{ color: "#ff1493" }}>Age: {state.age}</h3>
        </div>
      </Card>
    </Container>
  );
}

export default ChangeNameAge;
