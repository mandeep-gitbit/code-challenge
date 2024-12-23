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
            state.list = action.payload;
        },
    },
})

export  { pokemonSlice }; 