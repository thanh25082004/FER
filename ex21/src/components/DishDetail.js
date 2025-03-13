import React from "react";
import { useParams } from "react-router-dom";
import { dishes } from "../data";

function DishDetail() {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === parseInt(id));

  if (!dish) return <h2>Dish not found</h2>;

  return (
    <div className="container">
      <h2>{dish.name}</h2>
      <img src={dish.image} alt={dish.name} className="img-fluid" />
      <p>{dish.description}</p>
      <p>Price: ${dish.price}</p>
    </div>
  );
}

export default DishDetail;
