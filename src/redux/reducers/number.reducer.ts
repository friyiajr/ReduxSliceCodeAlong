import { AnyAction, createSlice } from "@reduxjs/toolkit";

export type NumberState = {
  counter: number;
};

export const INITIAL_STATE: NumberState = {
  counter: 0,
};

const numberReducer = createSlice({
  name: "number",
  initialState: INITIAL_STATE,
  reducers: {
    incrementCounter: (state: NumberState, _: AnyAction) => {
      state.counter = state.counter += 1;
    },
    decrementCounter: (state: NumberState, _: AnyAction) => {
      state.counter = state.counter -= 1;
    },
  },
});

export const { incrementCounter, decrementCounter } = numberReducer.actions;

export default numberReducer.reducer;
