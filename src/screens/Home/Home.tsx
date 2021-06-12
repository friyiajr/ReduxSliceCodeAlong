import { FC } from "react";

import "../../App.css";

import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  fetchPokemon,
  incrementCounter,
} from "../../redux/reducers/number.reducer";

import homeSelector from "./selectors/Home.selectors";

const Home: FC = () => {
  const dispatch = useDispatch();
  const dispatchIncrementCounter = () => dispatch(incrementCounter());
  const dispatchDecrementCounter = () => dispatch(decrementCounter());
  const dispatchFetchPokemon = () => dispatch(fetchPokemon());
  const screenData = useSelector(homeSelector);

  return (
    <div className="main-content">
      <div className="counter-content">
        <p className="counter-title">Your Current Count is:</p>
        <p className="counter-text">{screenData.count}</p>
      </div>
      <div className="button-container">
        <button onClick={dispatchIncrementCounter}>Increment Counter</button>
        <button onClick={dispatchDecrementCounter}>Decrement Counter</button>
      </div>
      <div className="pokemon-content">
        <p className="counter-title">Your Current Pokemon is:</p>
        <p className="counter-text">
          {screenData?.pokemon?.name?.toUpperCase() ?? ""}
        </p>
        <img
          src={screenData?.pokemon?.sprite ?? ""}
          alt="this is a pokemon"
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
