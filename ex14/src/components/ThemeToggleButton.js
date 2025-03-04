import React, { useContext } from "react";
import ThemeContext, { themes } from "./ThemeContext";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme.background,
        color: theme.foreground,
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
        margin: "10px",
      }}
    >
      {theme === themes.light ? "Current Theme Dark" : "Current Theme Light"}
    </button>
  );
}

export default ThemeToggleButton;
