import reducer, {
  INITIAL_STATE,
  NumberState,
  incrementCounter,
  decrementCounter,
  fetchPokemon,
  fetchPokemonSuccess,
} from "../number.reducer";

describe("Number Reducer", () => {
  describe("incrementCounter", () => {
    it("should increase the number of the reducer by 1", () => {
      const expected: NumberState = {
        ...INITIAL_STATE,
        counter: 1,
      };
      expect(reducer(INITIAL_STATE, incrementCounter)).toEqual(expected);
    });
  });
  describe("decrementCounter", () => {
    it("should decrease the number by 1", () => {
      const expected: NumberState = {
        ...INITIAL_STATE,
        counter: -1,
      };
      expect(reducer(INITIAL_STATE, decrementCounter)).toEqual(expected);
    });
  });
  describe("fetchPokemon", () => {
    it("should set the state for fetching pokemon to true", () => {
      const actual: NumberState = {
        ...INITIAL_STATE,
        isFetchingPokemon: true,
      };
      expect(reducer(INITIAL_STATE, fetchPokemon)).toEqual(actual);
    });
  });
  describe("fetchPokemonSuccess", () => {
    const rawPokemon = {
      name: "ditto",
      sprite: "https://www.something.com/image",
    };
    const actual: NumberState = {
      ...INITIAL_STATE,
      isFetchingPokemon: false,
      pokemon: rawPokemon,
    };

    expect(reducer(INITIAL_STATE, fetchPokemonSuccess(rawPokemon))).toEqual(
      actual
    );
  });
});
