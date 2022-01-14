import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bluePokeball from "../assets/images/bluePokeball.svg";
import greenPokeball from "../assets/images/greenPokeball.svg";
import redPokeball from "../assets/images/redPokeball.svg";
import town from "../assets/images/town.png";
import yellowPokeball from "../assets/images/yellowPokeball.svg";

import Loading from "./Loading";
import Pokemons from "./Pokemons";

console.clear();

export default function Pokedex({
  handleColor,
  handleName,
  handleReset,
  pokemonColor,
  pokemonName
}) {
  const [error, setError] = useState(false);
  const [isColorLoading, setIsColorLoading] = useState(undefined);
  const [isNameLoading, setIsNameLoading] = useState(undefined);
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [pokemonsList, setPokemonsList] = useState([]);
  const visibility = pokemonColor ? "visible" : "invisible";

  const getPokemons = async () => {
    try {
      const request = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=60"
      );
      const response = await request.json();
      const { results } = response;
      setPokemonsList(results);
    } catch {
      console.warn("Error getPokemons");
    }
  };

  const getPokemonsByColor = async (pokemonColor) => {
    if (pokemonColor && !pokemonName) {
      setIsColorLoading(true);
      try {
        const request = await fetch(
          `https://pokeapi.co/api/v2/pokemon-color/${pokemonColor}/`
        );
        const response = await request.json();
        setPokemonsList(response.pokemon_species);

        setTimeout(() => setIsColorLoading(false), 2000);
      } catch {
        console.warn("Error getPokemonsByColor");
      }
    }
  };

  const getPokemonByName = async (pokemonName) => {
    if (pokemonName) {
      setIsNameLoading(true);
      try {
        const request = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const response = await request.json();
        setPokemonInfo(response);

        setTimeout(() => {
          setIsNameLoading(false);
          setError(false);
        }, 1500);
      } catch {
        console.warn("Error getPokemonByName");

        setTimeout(() => {
          setIsNameLoading(false);
          setError(true);
        }, 1500);
      }
    }
  };

  useEffect(() => {
    getPokemons();
    getPokemonsByColor(pokemonColor);
    getPokemonByName(pokemonName);
  }, [pokemonColor, pokemonName]);

  return (
    <div className="container">
      <header>
        <div className="shadow"></div>
        <img className="background-image" src={town} alt="header" />
        <div className="pokedex__hero">
          <Link to="/">
            <h1 className="title-h1">Pokedex</h1>
          </Link>

          <p className="pokedex__hero-subtitle">
            Pick one and choose your Pokemon by color:
          </p>

          <button
            className="pokedex__hero-pokeball"
            onClick={() => handleColor(0, "")}
          >
            <img src={redPokeball} alt="red pokeball" />
          </button>

          <button
            className="pokedex__hero-pokeball"
            onClick={() => handleColor(1, "")}
          >
            <img src={bluePokeball} alt="blue pokeball" />
          </button>

          <button
            className="pokedex__hero-pokeball"
            onClick={() => handleColor(2, "")}
          >
            <img src={greenPokeball} alt="green pokeball" />
          </button>

          <button
            className="pokedex__hero-pokeball"
            onClick={() => handleColor(3, "")}
          >
            <img src={yellowPokeball} alt="yellow pokeball" />
          </button>

          <button
            className={`btn pokedex__hero-btn ${visibility}`}
            onClick={() => handleReset()}
          >
            Remove color
          </button>
        </div>
      </header>

      <main className="pokedex__main">
        {!pokemonColor ? (
          pokemonsList.length ? (
            <Pokemons
              error={error}
              handleName={handleName}
              isNameLoading={isNameLoading}
              pokemonColor={pokemonColor}
              pokemonInfo={pokemonInfo}
              pokemonsList={pokemonsList}
              pokemonName={pokemonName}
            />
          ) : (
            <Loading pokemonColor={pokemonColor} />
          )
        ) : isColorLoading ? (
          <Loading pokemonColor={pokemonColor} />
        ) : (
          <Pokemons
            error={error}
            handleName={handleName}
            isNameLoading={isNameLoading}
            pokemonColor={pokemonColor}
            pokemonInfo={pokemonInfo}
            pokemonsList={pokemonsList}
            pokemonName={pokemonName}
          />
        )}
      </main>
    </div>
  );
}
