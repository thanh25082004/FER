import { useState } from "react";

const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple", "Mango", "Strawberry", "Blueberry"];

export default function SearchFilter() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h2>Search Filter</h2>
      <input 
        type="text" 
        placeholder="Search..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {items
          .filter(item => item.toLowerCase().includes(query.toLowerCase()))
          .map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}