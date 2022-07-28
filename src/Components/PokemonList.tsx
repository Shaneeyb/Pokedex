import React, { useState, useEffect, useCallback } from "react";
import Pokemon from "./pokemon";

interface PokemonLink {
  name: string;
  url: string;
}

interface ResponseResult {
  count: number;
  results: PokemonLink[];
}

function AllPokemon() {
  const [allPokemon, setAllPokemon] = useState<PokemonLink[]>([]);

  const fetchPokemon = useCallback(async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    const pokemon = ((await response.json()) as ResponseResult)?.results;
    setAllPokemon(pokemon);
  }, []);

  return (
    <>
      <button onClick={fetchPokemon}>Get Pokemon</button>
      {allPokemon.map((p, index) => {
        return <Pokemon key={index} name={p.name} url={p.url} />;
      })}
    </>
  );
}

export default AllPokemon;
