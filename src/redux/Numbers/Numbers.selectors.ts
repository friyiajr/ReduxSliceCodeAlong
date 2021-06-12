import { RootState } from "../../store";

export const selectCount = (state: RootState) => state.number.count;
export const selectPokemon = (state: RootState) => state.number.pokemon;
