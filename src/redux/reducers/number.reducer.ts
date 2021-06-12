import { createSlice } from "@reduxjs/toolkit";
import Pokemon from "../../models/Pokemon";

export type NumberState = {
  counter: number;
  pokemon: Pokemon | null;
  isFetchingPokemon: boolean;
};

export const INITIAL_STATE: NumberState = {
  counter: 0,
  pokemon: null,
  isFetchingPokemon: false,
};

const numberReducer = createSlice({
  name: "number",
  initialState: INITIAL_STATE,
  reducers: {
    incrementCounter: (state) => {
      state.counter = state.counter += 1;
    },
    decrementCounter: (state) => {
      state.counter = state.counter -= 1;
    },
    fetchPokemon: (state) => {
      state.isFetchingPokemon = true;
    },
    fetchPokemonSuccess: (state, action) => {
      state.isFetchingPokemon = false;
      state.pokemon = action.payload;
    },
  },
});

export const {
  incrementCounter,
  decrementCounter,
  fetchPokemon,
  fetchPokemonSuccess,
} = numberReducer.actions;

export default numberReducer.reducer;
