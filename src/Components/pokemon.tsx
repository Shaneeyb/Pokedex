import React, { useState } from "react";

interface PokemonProps {
  name: string;
  url: string;
}

function Pokemon(props: PokemonProps) {
  // const [pokemon, setPokemon] = useState();
  // const [type, setType] = useState();
  // const [ability, setAbility] = useState();
  // const [stats, setStats] = useState();
  // const [sprite, setSprite] = useState();
  // const [shinySprite, setShinySprite] = useState();
  
  const {name, url} = props;

  // async function fetchData() {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   JSON.stringify(json);
  //   setType(json.type);
  //   setAbility(json.ability);
  //   setStats(json.stats);
  //   setSprite(json.front_default);
  //   setShinySprite(json.front_shiny);
  // }

  return (
    <>
      <div>Name: {name}</div>
      <div>Url: {url}</div>
      {/* <img src={sprite} />
      <img src={shinySprite} /> */}

        {/* {name}
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
        <p> {pokemon} </p> */}
    </>
  );
}

export default Pokemon;
