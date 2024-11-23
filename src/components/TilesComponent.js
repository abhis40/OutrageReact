import React from "react";
import Tile from "./Tile"; // Import the Tile component
import "../App.css";

const TilesComponent = () => {
  const tilesData = [
    {
      title: "Collaborate Seamlessly",
      description:
        "Effortless collaboration across teams with a secure platform designed for productivity and success.",
      backgroundColor: "#4caf50",
    },
    {
      title: "Simplify Access Management",
      description:
        "Easily manage access to critical tools and resources while ensuring security and reliability.",
      backgroundColor: "#2196f3",
    },
    {
      title: "Secure Your Data",
      description:
        "Robust encryption ensures your data stays protected from unauthorized access at all times.",
      backgroundColor: "#f44336",
    },
  ];

  return (
    <div className="tiles-container">
      <h1>Efficient, Secure, and Reliable</h1>
      <div className="tiles-wrapper">
        {tilesData.map((tile, index) => (
          <Tile
            key={index}
            title={tile.title}
            description={tile.description}
            backgroundColor={tile.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
};

export default TilesComponent;
