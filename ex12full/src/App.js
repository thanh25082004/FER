import React from "react";
import Counter from "./components/Counter";
import InputField from "./components/InputField";
import ToggleVisibility from "./components/ToggleVisibility";
import TodoList from "./components/TodoList";
import ColorSwitcher from "./components/ColorSwitcher";
import SearchFilter from "./components/SearchFilter";
import DragAndDropList from "./components/DragAndDropList";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <h1>exercise 12 </h1>
      <div className="grid">
        <div className="component">
          <h2>Counter</h2>
          <Counter />
        </div>
        <div className="component">
          <h2>Controlled Input</h2>
          <InputField />
        </div>
        <div className="component">
          <h2>Toggle Visibility</h2>
          <ToggleVisibility />
        </div>
        <div className="component">
          <h2>Todo List</h2>
          <TodoList />
        </div>
        <div className="component">
          <h2>Color Switcher</h2>
          <ColorSwitcher />
        </div>
        <div className="component">
          <h2>Search Filter</h2>
          <SearchFilter />
        </div>
        <div className="component">
          <h2>Drag and Drop List</h2>
          <DragAndDropList />
        </div>
      </div>
    </div>
  );
};

export default App;
