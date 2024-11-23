import React from "react";
import Tile from "./Tile"; // Import the Tile component
import "../App.css";

const TilesComponent = () => {
  const tilesData = [
    {
      title: "Keep Projects Moving",
      description:
        "Everybody hates being locked out. With our shared password manager, your team's apps and tools are accessible anywhere, keeping your projects moving.",
      backgroundColor: "#0b3c5d",
      icon: "https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdevices-icon.83037bcf.png&w=96&q=75",
    },
    {
      title: "Share Logins and Passwords",
      description:
        "Most password managers are for personal use and require installation and configuration. Our team password manager was designed with ease-of-use and collaboration in mind.",
      backgroundColor: "#102a42",
      icon: "https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdevices-icon.83037bcf.png&w=96&q=75",
    },
    {
      title: "Protect Your Assets",
      description:
        "If poorly managed passwords get into the wrong hands, the consequences can cripple your business. Our secure password manager protects your team by controlling access to your most valuable assets.",
      backgroundColor: "#009ca6",
      icon: "https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdevices-icon.83037bcf.png&w=96&q=75",
    },
  ];

  return (
    <div className="tiles-container">
      <h1>Your Team, Secure and In Sync</h1>
      <div className="tiles-wrapper">
        {tilesData.map((tile, index) => (
          <Tile
            key={index}
            title={tile.title}
            description={tile.description}
            backgroundColor={tile.backgroundColor}
            icon={tile.icon}
          />
        ))}
      </div>
      <button className="product-tour-btn">Take a Product Tour →</button>
    </div>
  );
};

export default TilesComponent;
