import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
    list: string[];
  }
  
const initialState: PokemonState = {
    list: [],
  };

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setPokemonList(state, action: PayloadAction<string[]>) {
            state.list = action.payload.map((pokemon: any) => pokemon.name);
        },
        removePokemon(state, action: PayloadAction<string>) {
            state.list = state.list.filter((pokemon) => pokemon !== action.payload);
        }
    },
})

export  { pokemonSlice }; 
export const { setPokemonList, removePokemon } = pokemonSlice.actions;