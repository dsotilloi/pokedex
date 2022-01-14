import React from "react";
import bluePokeball from "../assets/images/bluePokeball.svg";
import greenPokeball from "../assets/images/greenPokeball.svg";
import redPokeball from "../assets/images/redPokeball.svg";
import yellowPokeball from "../assets/images/yellowPokeball.svg";

console.clear();

export default function Loading({ pokemonColor, pokemonName }) {
  const showPokeball = (pokemonColor) => {
    if (!pokemonColor || pokemonColor === "red") {
      return redPokeball;
    }

    if (pokemonColor === "blue") {
      return bluePokeball;
    }

    if (pokemonColor === "green") {
      return greenPokeball;
    }

    if (pokemonColor === "yellow") {
      return yellowPokeball;
    }
  };

  return (
    <div className="loading">
      <img
        className={`loading__pokeball animate__animated animate__shakeY displayNone`}
        src={showPokeball(pokemonColor)}
        alt="pokeball"
      />
      {pokemonName ? (
        <p>Loading Pokemon...</p>
      ) : (
        <p>Loading {pokemonColor} Pokemons...</p>
      )}
    </div>
  );
}
