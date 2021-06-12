import { RootState } from "../../store";

export const selectCount = (state: RootState) => state.number.counter;
