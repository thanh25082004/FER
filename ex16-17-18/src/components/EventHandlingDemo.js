import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-center">
      <p className="mb-2">Count: <strong>{count}</strong></p>
      <Button className="custom-button increase-btn" onClick={handleButtonClick}>
        <FaPlus /> Increase
      </Button>
    </div>
  );
};

export default EventHandlingDemo;
