import React from "react";
import AnimalCard from "./AnimalCard";
import animals from "./data";
import "./AnimalList.css";

export default function AnimalList() {
  return (
    <div>
      <h1 className="title">Animals</h1>
      <div className="animal-list">
        {animals.map((animal) => (
          <AnimalCard key={animal.name} {...animal} />
        ))}
      </div>
    </div>
  );
}
