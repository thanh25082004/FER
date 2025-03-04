import React, { useState } from "react";
import { useCart } from "./CartContext";

const dishes = [
  { id: 1, name: "Uthappizza", price: 4.99, description: "Pizza kiểu Ấn", image: "https://tse3.mm.bing.net/th?id=OIP.RUe4pS-Zh_-gLK8WOO-oUAHaE5&pid=Api&P=0&h=220" },
  { id: 2, name: "Zucchipakoda", price: 1.99, description: "Bánh zucchini chiên", image: "https://tse4.mm.bing.net/th?id=OIP.NQbEu9lf18_MNeTh5hvTpAHaEK&pid=Api&P=0&h=220" },
  { id: 3, name: "Vadonut", price: 1.99, description: "Donut kiểu Ấn", image: "https://i.ytimg.com/vi/x1oh8O8znH0/maxresdefault.jpg" },
  { id: 4, name: "ElaiCheese Cake", price: 2.99, description: "Cheesecake với cardamom", image: "https://preview.redd.it/cheesecake-with-cardamom-crust-almond-lemon-center-and-v0-j8et7nldyqka1.jpg?auto=webp&s=d467fda67010cf926500a779b7ec58300a450b5a" }
];

const DishesList = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDishes = dishes.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dish.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dishes-container">
      <input
        type="text"
        placeholder="🔍 Tìm món ăn..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="dishes-list">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>Giá: ${dish.price.toFixed(2)}</p>
            <button onClick={() => addToCart(dish)}>Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishesList;
