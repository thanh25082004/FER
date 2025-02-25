import React, { useState } from "react";

const DragAndDropList = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDrop = (index) => {
    if (draggingItem === null) return;
    const newItems = [...items];
    const draggedItem = newItems.splice(draggingItem, 1)[0];
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
    setDraggingItem(null);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            style={{
              padding: "8px",
              margin: "4px",
              backgroundColor: "#ddd",
              cursor: "grab",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDropList;
