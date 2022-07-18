import React, { useState } from "react";

function Pokemon(props) {
  const [pokemon, setPokeomn] = useState();
  const [type, setType] = useState();
  const [ability, setAbility] = useState();
  const [stats, setStats] = useState();
  const [sprite, setSprite] = useState();
  const [shinySprite, setShinySprite] = useState();

  async function fetchData() {
    const response = await fetch(props.url);
    const json = await response.json();
    JSON.stringify(json);
    setType(json.type);
    setAbility(json.ability);
    setStats(json.stats);
    setSprite(json.front_default);
    setShinySprite(json.front_shiny);
  }

  return (
    <>
      <img src={sprite} />
      <img src={shinySprite} />
      <button onClick={fetchData}>
        {props.name}
        {type &&
          type.map((t, index) => {
            <p key={index}> Type: {t.type.name}</p>;
          })}
        {stats &&
          stats.map((s, index) => {
            <>
              <p key={index}> Stats:</p>
              <p>
                {" "}
                {s.stats.name} {s.stats.base_stat}
              </p>
            </>;
          })}
        {ability &&
          ability.map((a, index) => {
            <>
              <p key={index}> Ability: {a.ability.name}</p>
            </>;
          })}
        <p> {pokemon} </p>
      </button>
    </>
  );
}

export default Pokemon;