import { takeEvery, select, call, put } from "@redux-saga/core/effects";
import {
  fetchingPokemonCompleted,
  startFetchingPokemon,
} from "./Numbers.reducer";
import { selectCount } from "./Numbers.selectors";

import axios from "axios";
import Pokemon from "../../models/Pokemon";
import { AnyAction } from "@reduxjs/toolkit";

function* getPokemonSaga(): Generator<AnyAction, void, string> {
  const pokemonUrl: string = "https://pokeapi.co/api/v2/pokemon/";
  const pokemonId: string = yield select(selectCount);
  const rawPokeData: any = yield call(axios.get, `${pokemonUrl}${pokemonId}`);
  const pokemon: Pokemon = {
    name: rawPokeData.data.name,
    avatar: rawPokeData.data.sprites.front_default,
  };
  yield put(fetchingPokemonCompleted(pokemon));
}

export function* numberRootSaga() {
  yield takeEvery(startFetchingPokemon.type, getPokemonSaga);
}
