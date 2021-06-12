import { FC } from "react";
import { Provider } from "react-redux";

import "./App.css";

import Home from "./screens/Home/Home";
import store from "./store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
