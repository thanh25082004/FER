import React, { useState } from "react";

const ToggleVisibility = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} Text
      </button>
      {visible && <p>This is some toggled text!</p>}
    </div>
  );
};

export default ToggleVisibility;
