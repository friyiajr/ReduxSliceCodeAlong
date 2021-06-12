import { RootState } from "../../store";
import { INITIAL_STATE } from "./Numbers.reducer";
import { selectCount, selectPokemon } from "./Numbers.selectors";

import Pokemon from "../../models/Pokemon";

describe("Number Selectors", () => {
  describe("selectCount", () => {
    it("should retrieve the count from the application state", () => {
      const state: RootState = {
        number: {
          ...INITIAL_STATE,
          count: 10,
        },
      };

      expect(selectCount(state)).toEqual(10);
    });
  });
  describe("selectPokemon", () => {
    const pokemon: Pokemon = {
      name: "Charizard",
      avatar: "image.com",
    };
    const state: RootState = {
      number: {
        ...INITIAL_STATE,
        pokemon,
      },
    };
    expect(selectPokemon(state)).toEqual(pokemon);
  });
});
