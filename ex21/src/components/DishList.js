import React from "react";
import { Link } from "react-router-dom";
import { dishes } from "../data";

function DishList() {
  return (
    <div className="container">
      <h2>Dish List</h2>
      <div className="row">
        {dishes.map((dish) => (
          <div key={dish.id} className="col-md-3">
            <div className="card">
              <img src={dish.image} className="card-img-top" alt={dish.name} />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/dishes/${dish.id}`}>{dish.name}</Link>
                </h5>
                <p className="card-text">${dish.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DishList;
