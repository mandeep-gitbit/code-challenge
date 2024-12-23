import {useState, useEffect} from 'react';
import { List } from 'ui'
import axios from 'axios';

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {

  const [pokemonList, setPokemonList] = useState<any[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios(api);
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
  <>
    <h1>Pokemon list:</h1>
    <List />
  </>
  )
}

export default App
