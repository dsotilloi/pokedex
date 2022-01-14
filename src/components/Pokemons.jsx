import React from "react";

import Card from "./Card";
import Loading from "./Loading";
import PokemonPicker from "./PokemonPicker";

export default function Pokemons({
  error,
  handleName,
  isNameLoading,
  pokemonColor,
  pokemonInfo,
  pokemonsList,
  pokemonName
}) {
  return (
    <>
      <aside className="pokemons__aside">
        <h2 className="pokemons__aside--h2">Pokemons</h2>
        <ul className="pokemons__aside--pokemonPiker-Ul">
          {pokemonsList.map((pokemon) => (
            <PokemonPicker
              key={pokemon.name}
              handleName={handleName}
              name={pokemon.name}
            />
          ))}
        </ul>
      </aside>
      <section className="pokemons__cardContainer">
        {!pokemonName ? (
          <p>Select a {pokemonColor} Pokemon</p>
        ) : isNameLoading ? (
          <Loading pokemonName={pokemonName} />
        ) : error ? (
          <p>Pokemon not found, ¡please choose another!</p>
        ) : (
          <Card pokemonInfo={pokemonInfo} />
        )}
      </section>
    </>
  );
}
