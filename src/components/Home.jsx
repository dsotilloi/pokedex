import React from "react";
import { Link } from "react-router-dom";
import town from "../assets/images/town.png";

console.clear();

export default function Home() {
  return (
    <div className="container">
      <div className="shadow"></div>
      <img className="background-image" src={town} alt="town" />
      <div className="home__title">
        <h1 className="title-h1">POKEDEX</h1>
        <Link to="/pokedex">
          <button className="btn home__title-btn">Enter</button>
        </Link>
      </div>
    </div>
  );
}
