import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { CartProvider } from "./components/CartContext";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="app-container">
          <h1>Ứng dụng Giỏ hàng & Chuyển đổi Theme</h1>
          <ThemeToggleButton />
          <hr />
          <DishesList />
          <Cart />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
