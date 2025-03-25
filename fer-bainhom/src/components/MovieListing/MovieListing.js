import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre] = useState("");
  const [selectedType, setSelectedType] = useState("All"); // Movies, Shows hoặc All

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };


  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  // Lọc danh sách Movies
  const filteredMovies =
    movies.Response === "True"
      ? movies.Search.filter(
          (movie) =>
            movie.Title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedGenre === "" ||
              movie.Genre?.toLowerCase().includes(selectedGenre.toLowerCase())) &&
            (selectedType !== "Movies" || 
              /(harry potter|dirty harry)/i.test(movie.Title)) // Chỉ giữ phim Harry Potter và Dirty Harry
        )
      : [];

  // Lọc danh sách Shows
  const filteredShows =
    shows.Response === "True"
      ? shows.Search.filter(
          (show) =>
            show.Title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedGenre === "" ||
              show.Genre?.toLowerCase().includes(selectedGenre.toLowerCase())) &&
            (selectedType !== "Shows" || /friends/i.test(show.Title)) // Chỉ giữ show có "Friends"
        )
      : [];

  return (
    <div className="movie-wrapper">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies or shows..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={selectedType} onChange={handleTypeChange}>
          <option value="All">All</option>
          <option value="Movies">Movies</option>
          <option value="Shows">Shows</option>
        </select>
        
      </div>

      {/* Movies */}
      {selectedType !== "Shows" && (
        <div className="movie-list">
          <h2 className="category">Movies</h2>
          <div className="movie-container">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie, index) => (
                <MovieCard key={index} data={movie} />
              ))
            ) : (
              <h3>No movies found.</h3>
            )}
          </div>
        </div>
      )}

      {/* Shows */}
      {selectedType !== "Movies" && (
        <div className="show-list">
          <h2 className="category">Shows</h2>
          <div className="movie-container">
            {filteredShows.length > 0 ? (
              filteredShows.map((show, index) => (
                <MovieCard key={index} data={show} />
              ))
            ) : (
              <h3>No shows found.</h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieListing;
