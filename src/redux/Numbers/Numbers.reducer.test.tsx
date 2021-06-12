import Pokemon from "../../models/Pokemon";
import reducer, {
  decrementCounter,
  fetchingPokemonCompleted,
  incrementCounter,
  INITIAL_STATE,
  NumberState,
  startFetchingPokemon,
} from "./Numbers.reducer";

describe("Number Reducer", () => {
  describe("incrementCounter", () => {
    it("should increment the count in the state by 1", () => {
      const expectedResult: NumberState = {
        ...INITIAL_STATE,
        count: 1,
      };

      expect(reducer(INITIAL_STATE, incrementCounter)).toEqual(expectedResult);
    });
  });
  describe("decrementCounter", () => {
    it("should decrement the count by 1", () => {
      const expectedResult: NumberState = {
        ...INITIAL_STATE,
        count: -1,
      };

      expect(reducer(INITIAL_STATE, decrementCounter)).toEqual(expectedResult);
    });
  });

  describe("startFetchingPokemon", () => {
    it("should set state to true if the user is fetching a pokemon", () => {
      const expectedResult: NumberState = {
        ...INITIAL_STATE,
        isFetchingPokemon: true,
      };

      expect(reducer(INITIAL_STATE, startFetchingPokemon)).toEqual(
        expectedResult
      );
    });
  });

  describe("fetchingPokemonCompleted", () => {
    it("should add pokemon to the state and set isFetchingPokemon to false", () => {
      const pokemon: Pokemon = {
        name: "Charizard",
        avatar: "www.image.com",
      };

      const expectedResult: NumberState = {
        ...INITIAL_STATE,
        isFetchingPokemon: false,
        pokemon,
      };

      expect(reducer(INITIAL_STATE, fetchingPokemonCompleted(pokemon))).toEqual(
        expectedResult
      );
    });
  });
});
