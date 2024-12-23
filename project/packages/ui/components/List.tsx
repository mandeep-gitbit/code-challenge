import React from 'react';
import '../styles/List.css';

interface Pokemon {
  name: string;
}

interface ListProps {
  pokemonList: Pokemon[];
}

export const List: React.FC<ListProps> = ({pokemonList}) => {
  return (
    <ul className='pokemon-grid'>
      {pokemonList.map((pokemon, index) => (
        <li key={index} className='pokemon-item'>{pokemon.name}</li>
      ))}
    </ul>
  )
}