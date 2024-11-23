import React from "react";
import "../App.css";

const Tile = ({ title, description, backgroundColor, icon }) => {
  return (
    <div className="tile" style={{ backgroundColor }}>
      
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Tile;
