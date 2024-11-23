import React from "react";
import "../App.css";

const Tile = ({ title, description, backgroundColor, icon }) => {
  return (
    <div className="tile" style={{ backgroundColor }}>
      <div className="icon-placeholder">
        <img src={icon} alt="Icon" className="tile-icon" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Tile;
