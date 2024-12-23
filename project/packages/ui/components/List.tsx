import React from 'react';

interface Pokemon {
  name: string;
}

interface ListProps {
  pokemonList: Pokemon[];
}

export const List: React.FC<ListProps> = ({pokemonList}) => {
  return (
    <ul>
      {pokemonList.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  )
}