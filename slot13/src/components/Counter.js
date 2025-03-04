import React, { useReducer } from "react";
import { Container, Button, Card } from "react-bootstrap";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card
        className="p-4 shadow-lg text-center"
        style={{ width: "1000px", backgroundColor: "#ffe4e1", border: "2px solid #ff69b4" }}
      >
        <h2 className="mb-4" style={{ fontSize: "2rem", fontWeight: "bold", color: "#ff1493" }}>
          Counter: {state.count}
        </h2>
        <div className="d-flex justify-content-center gap-3">
          <Button
            style={{ backgroundColor: "#ff69b4", border: "none", fontSize: "1.2rem", color: "white" }}
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            +
          </Button>
          <Button
            style={{ backgroundColor: "#ff1493", border: "none", fontSize: "1.2rem", color: "white" }}
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            -
          </Button>
          <Button
            style={{ backgroundColor: "#db7093", border: "none", fontSize: "1rem", color: "white" }}
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default Counter;
