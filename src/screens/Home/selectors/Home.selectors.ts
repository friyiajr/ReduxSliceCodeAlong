import { createStructuredSelector } from "reselect";
import Pokemon from "../../../models/Pokemon";
import {
  selectCount,
  selectPokemon,
} from "../../../redux/selectors/number.selector";
import { RootState } from "../../../store";

type HomeScreenData = {
  count: number;
  pokemon: Pokemon | null;
};

const homeSelector = createStructuredSelector<RootState, HomeScreenData>({
  count: selectCount,
  pokemon: selectPokemon,
});

export default homeSelector;
