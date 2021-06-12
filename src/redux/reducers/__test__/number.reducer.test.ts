import reducer, {
  INITIAL_STATE,
  NumberState,
  incrementCounter,
  decrementCounter,
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
});
