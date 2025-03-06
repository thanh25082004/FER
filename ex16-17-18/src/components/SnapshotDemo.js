import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaSave, FaUndo, FaPlus } from 'react-icons/fa';

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSnapshot = () => {
    setSnapshot(count);
  };

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };

  return (
    <div className="text-center">
      <p className="mb-2">Count: <strong>{count}</strong></p>
      <Button className="custom-button increase-btn m-1" onClick={handleIncrement}>
        <FaPlus /> Increment
      </Button>
      <Button className="custom-button save-btn m-1" onClick={handleSnapshot}>
        <FaSave /> Save
      </Button>
      <Button className="custom-button restore-btn m-1" onClick={handleRestore}>
        <FaUndo /> Restore
      </Button>
    </div>
  );
};

export default SnapshotDemo;
