import { FC } from "react";

import "../../App.css";

const Home: FC = () => {
  return (
    <div className="main-content">
      <div className="counter-content">
        <p className="counter-title">Your Current Count is:</p>
        <p className="counter-text">{0}</p>
      </div>
      <div className="button-container">
        <button>Increment Counter</button>
        <button>Decrement Counter</button>
      </div>
    </div>
  );
};

export default Home;
