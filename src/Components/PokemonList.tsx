import React, { useState, useEffect }from "react";
import Pokemon from "./Pokemon";


function AllPokemon() {
    const [allPokemon, setAllPokemon] = useState();

    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
            console.log(response)
            const json = await response.json();
            setAllPokemon(json.results)
        }
        fetchPokemonData();
    }, [])

    return (
        <>
        {
            allPokemon && 
            allPokemon.map((p, index) => {
                <Pokemon key={index} name={p.name} url={p.url}
            })
        }
        </>
    )
}

export default AllPokemon;