import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(data.imdbID));
  }, [data.imdbID]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      favorites = favorites.filter((id) => id !== data.imdbID);
    } else {
      favorites.push(data.imdbID);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
              {data.imdbRating && <p>⭐ {data.imdbRating}</p>}
            </div>
          </div>
        </div>
      </Link>
      <button className={`favorite-btn ${isFavorite ? "active" : ""}`} onClick={toggleFavorite}>
        {isFavorite ? "❤️ Bỏ thích" : "🤍 Yêu thích"}
      </button>
    </div>
  );
};

export default MovieCard;
