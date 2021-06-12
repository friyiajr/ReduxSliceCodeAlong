import { createSlice } from "@reduxjs/toolkit";
import Pokemon from "../../models/Pokemon";

export type NumberState = {
  count: number;
  pokemon: Pokemon | null;
  isFetchingPokemon: boolean;
};

export const INITIAL_STATE: NumberState = {
  count: 0,
  pokemon: null,
  isFetchingPokemon: false,
};

const numberReducer = createSlice({
  name: "number",
  initialState: INITIAL_STATE,
  reducers: {
    incrementCounter: (state) => {
      state.count = state.count + 1;
    },
    decrementCounter: (state) => {
      state.count = state.count -= 1;
    },
    startFetchingPokemon: (state) => {
      state.isFetchingPokemon = true;
    },
    fetchingPokemonCompleted: (state, action) => {
      state.isFetchingPokemon = false;
      state.pokemon = action.payload;
    },
  },
});

export const {
  incrementCounter,
  decrementCounter,
  startFetchingPokemon,
  fetchingPokemonCompleted,
} = numberReducer.actions;

export default numberReducer.reducer;
