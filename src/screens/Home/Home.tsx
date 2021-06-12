import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../App.css";
import {
  decrementCounter,
  incrementCounter,
  startFetchingPokemon,
} from "../../redux/Numbers/Numbers.reducer";

import homeScreenSelector from "./Home.selector";

const Home: FC = () => {
  const dispatch = useDispatch();
  const homeScreenData = useSelector(homeScreenSelector);
  const dispatchIncrement = () => dispatch(incrementCounter());
  const dispatchDecrement = () => dispatch(decrementCounter());
  const dispatchFetchPokemon = () => dispatch(startFetchingPokemon());

  return (
    <div className="main-content">
      <div className="counter-content">
        <p className="counter-title">Your Current Count is:</p>
        <p className="counter-text">{homeScreenData?.count}</p>
      </div>
      <div className="button-container">
        <button onClick={dispatchIncrement}>Increment Counter</button>
        <button onClick={dispatchDecrement}>Decrement Counter</button>
      </div>
      <div className="pokemon-content">
        <p className="counter-title">Your Current Pokemon is:</p>
        <p className="counter-text">
          {homeScreenData?.pokemon?.name?.toUpperCase() ?? ""}
        </p>
        <img
          src={homeScreenData?.pokemon?.avatar}
          alt="This is a pokemon"
          className="pokemon-image"
        />
      </div>
      <div className="button-container">
        <button onClick={dispatchFetchPokemon}>Get Pokemon</button>
      </div>
    </div>
  );
};

export default Home;
