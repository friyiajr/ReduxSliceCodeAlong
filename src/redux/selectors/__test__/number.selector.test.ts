import Pokemon from "../../../models/Pokemon";
import { RootState } from "../../../store";
import { INITIAL_STATE } from "../../reducers/number.reducer";
import { selectCount, selectPokemon } from "../number.selector";

describe("Number Reducer", () => {
  describe("selectCurrentCount", () => {
    it("should get the current number of count from the state", () => {
      const state: RootState = {
        number: {
          ...INITIAL_STATE,
          counter: 10,
        },
      };
      expect(selectCount(state)).toEqual(10);
    });
  });
  describe("selectPokemon", () => {
    it("should get the current pokemon from the state", () => {
      const pokemon: Pokemon = {
        name: "ditto",
        sprite: "www.image.com",
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
});
