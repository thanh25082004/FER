import React, { useState } from "react";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const items = ["Apple", "Banana", "Cherry", "Date", "Grape"];

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value.toLowerCase())} />
      <ul>
        {items.filter(item => item.toLowerCase().includes(search)).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
