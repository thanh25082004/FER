import React, { useState } from "react";

const ColorSwitcher = () => {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
};

export default ColorSwitcher;
