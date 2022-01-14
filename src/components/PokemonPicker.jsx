import React from "react";
import { Link } from "react-router-dom";
import redPokeball from "../assets/images/redPokeball.svg";

export default function PokemonPicker({ name, handleName }) {
  return (
    <li className="pokemon-picker__li" onClick={() => handleName(name)}>
      <img
        alt="pokeball"
        className="pokemon-picker__li-pokeball"
        src={redPokeball}
      />
      <Link to={`pokemon=${name}`}>
        <p>{name}</p>
      </Link>
    </li>
  );
}
