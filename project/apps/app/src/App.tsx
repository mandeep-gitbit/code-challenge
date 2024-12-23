import {useEffect} from 'react';
import { List } from 'ui'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {pokemonSlice} from './store/slices/pokemonSlice';
const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios(api);
        dispatch(pokemonSlice.actions.setPokemonList(response.data.results));
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonList();
  }, [dispatch]);

  return (
  <>
    <h1>Pokemon list:</h1>
    <List />
  </>
  )
}

export default App
