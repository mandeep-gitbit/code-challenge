import React from 'react'
import '../styles/List.css';
import { useSelector } from 'react-redux';

interface Pokemon {
  name: string;
}

export const List: React.FC = () => {
  const pokemonList = useSelector((state: any) => state.pokemon.list);
  console.log(pokemonList);
  return (
    <ul className='pokemon-grid'>
      {pokemonList.map((pokemon: Pokemon, index: number) => (
        <li key={index} className='pokemon-item'>{pokemon.name}</li>
      ))}
    </ul>
  )
}