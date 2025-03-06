import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

function EventHandlingDemo() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <Container className="text-center mt-4">
      <h3>Click Counter</h3>
      <p>Count: {count}</p>
      <Button onClick={handleButtonClick} variant="primary">Click me</Button>
    </Container>
  );
}

export default EventHandlingDemo;
