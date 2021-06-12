import { takeEvery, call, put, select } from "redux-saga/effects";
import { fetchPokemon, fetchPokemonSuccess } from "../reducers/number.reducer";
import { selectCount } from "../selectors/number.selector";
import axios from "axios";
import Pokemon from "../../models/Pokemon";

function* fetchPokemonSaga(): Generator {
  const pokemonNumber = yield select(selectCount);
  const pokemon: any = yield call(
    axios.get,
    `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
  );

  const payload: Pokemon = {
    name: pokemon.data.name,
    sprite: pokemon.data.sprites.front_default,
  };
  yield put({
    type: fetchPokemonSuccess.type,
    payload,
  });
}

export function* numbersRootSaga() {
  yield takeEvery(fetchPokemon.type, fetchPokemonSaga);
}
