import { FC } from "react";

import "./App.css";

import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import {
  decrementCounter,
  incrementCounter,
} from "./redux/reducers/number.reducer";
import { selectCount } from "./redux/selectors/number.selector";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

const Home: FC = () => {
  const dispatch = useDispatch();
  const dispatchIncrementCounter = () => dispatch(incrementCounter());
  const dispatchDecrementCounter = () => dispatch(decrementCounter());
  const counterValue = useSelector(selectCount);

  return (
    <div className="main-content">
      <div className="counter-content">
        <p className="counter-title">Your Current Count is:</p>
        <p className="counter-text">{counterValue}</p>
      </div>
      <div className="button-container">
        <button onClick={dispatchIncrementCounter}>Increment Counter</button>
        <button onClick={dispatchDecrementCounter}>Decrement Counter</button>
      </div>
    </div>
  );
};

export default App;
