import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const pokemons = ['Pikachu', 'Kiki', 'Mouneinar', 'Radier', 'Mainik'];
  const randomPokemon = Math.floor(Math.random() * pokemons.length);
  function catchPokemon () {
    setCaught(caught.concat(pokemons[randomPokemon]));
  }

  console.log(props); //what happens if i am using the array function with no retun, where do I place the variables? A: you can't, it (JSX) doesn't allow for JS code without {}
  return (
  <>
    <p>Caught {caught.length} Pokemon on {props.date}</p>
    <button onClick={catchPokemon}>Caught Pokemon</button>
    <ul>{caught.map((el, index) => {
      return <li key={index}>{el}</li>;
    })}
    </ul>
    </>
);
};
export default CaughtPokemon;