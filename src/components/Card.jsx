import React from "react";

console.clear();

export default function Card({ pokemonInfo }) {
  const name = pokemonInfo.name;
  const skills = pokemonInfo.abilities;

  return (
    <div>
      {name && (
        <>
          <div>
            <img
              className="card__images"
              src={pokemonInfo.sprites.front_default}
              alt=""
            />
            <img
              className="card__images"
              src={pokemonInfo.sprites.back_default}
              alt=""
            />
          </div>
          <h1 className="card__h1 title-h1">{name}</h1>
          <ul className="card__skillsUl">
            {skills.map((skill) => (
              <li className="card__skillsLi" key={skill.ability.name}>
                {skill.ability.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
