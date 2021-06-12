import { FC } from "react";

import "./App.css";

import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./screens/Home/Home";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
