import React from 'react';
import '../styles/List.css';
import { useSelector, useDispatch } from 'react-redux';
import { removePokemon } from '../../../apps/app/src/store/slices/pokemonSlice';

export const List: React.FC = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: any) => state.pokemon.list);

  const handleRemove = (name: string) => {
    dispatch(removePokemon(name));
  };

  return (
    <ul className='pokemon-grid'>
      {pokemonList.map((pokemon: string, index: number) => (
        <li key={index} className='pokemon-item'>
          {pokemon}
          <button onClick={() => handleRemove(pokemon)}className='pokemon-btn-delete'>Delete</button>  
        </li>
      ))}
    </ul>
  )
}