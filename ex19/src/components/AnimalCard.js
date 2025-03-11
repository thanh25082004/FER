import React from "react";
import PropTypes from "prop-types";
import "./AnimalCard.css";

export default function AnimalCard({ name, scientificName, size, diet, additional, image }) {
  const showAdditionalData = () => {
    alert(additional?.notes || "No additional information available.");
  };

  return (
    <div className="animal-card">
      <img src={image} alt={name} className="animal-image" />
      <div className="animal-info">
        <h2 className="animal-name">{name}</h2>
        <p className="scientific-name">Scientific Name: {scientificName}</p>
        <p>{size} kg</p>
        <p>{diet.join(", ")}</p>
        <button onClick={showAdditionalData} className="info-button">More Info</button>
      </div>
    </div>
  );
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  additional: PropTypes.shape({ notes: PropTypes.string }),
  image: PropTypes.string.isRequired
};
