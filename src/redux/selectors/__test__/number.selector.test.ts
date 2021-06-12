import { RootState } from "../../../store";
import { selectCount } from "../number.selector";

describe("Number Reducer", () => {
  describe("selectCurrentCount", () => {
    it("should get the current number of count from the state", () => {
      const state: RootState = {
        number: {
          counter: 10,
        },
      };
      expect(selectCount(state)).toEqual(10);
    });
  });
});
