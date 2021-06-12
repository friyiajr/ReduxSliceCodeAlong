import { createStructuredSelector } from "reselect";
import Pokemon from "../../models/Pokemon";
import {
  selectCount,
  selectPokemon,
} from "../../redux/Numbers/Numbers.selectors";
import { RootState } from "../../store";

type HomeScreenData = {
  count: number;
  pokemon: Pokemon | null;
};

const homeScreenSelector = createStructuredSelector<RootState, HomeScreenData>({
  count: selectCount,
  pokemon: selectPokemon,
});

export default homeScreenSelector;
