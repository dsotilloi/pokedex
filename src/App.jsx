import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Card from "./components/Card";
import Home from "./components/Home";
import Pokedex from "./components/Pokedex";

import "./styles.css";

export default function App() {
  const color = ["red", "blue", "green", "yellow"];
  const [pokemonColor, setPokemonColor] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  const handleColor = (i, nameRemover) => {
    setPokemonColor(color[i]);
    setPokemonName(nameRemover);
  };

  const handleName = (name) => {
    setPokemonName(name);
  };

  const handleReset = () => {
    setPokemonColor("");
    setPokemonName("");
  };

  return (
    <div className={`App ${pokemonColor}`}>
      <Routes>
        <Route
          path="/pokedex"
          element={
            <Pokedex
              handleColor={handleColor}
              handleName={handleName}
              handleReset={handleReset}
              pokemonColor={pokemonColor}
              pokemonName={pokemonName}
            />
          }
        >
          <Route path="pokemon=:name" element={<Card />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
