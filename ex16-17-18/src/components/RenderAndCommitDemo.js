import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaRedo } from 'react-icons/fa';

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-center">
      <p className="mb-2">Count: <strong>{count}</strong></p>
      <Button className="custom-button increase-btn" onClick={handleClick}>
        <FaRedo /> Increment
      </Button>
    </div>
  );
};

export default RenderAndCommitDemo;
