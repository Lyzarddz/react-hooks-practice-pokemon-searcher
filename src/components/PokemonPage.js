import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
const [pokemonLoad, setPokemonLoad] = useState([])
const [search, setSearch] = useState("")

useEffect(()=>{
  fetch("http://localhost:3001/pokemon")
  .then((resp) => resp.json())
  .then((data)=> {
    setPokemonLoad(data)
  })
} , [])

function addPokemon(poke){
  setPokemonLoad([poke, ...pokemonLoad])
}


const pokeSearch = pokemonLoad.filter((poke) => 
poke.name.toLowerCase().includes(search.toLowerCase())
)



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon={pokeSearch}/>
    </Container>
  );
}

export default PokemonPage;
