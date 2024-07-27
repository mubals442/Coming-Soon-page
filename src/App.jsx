import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import SoonMsg from "./Components/SoonMsg";
import Media from "./Components/Media";
import back from "../src/assets/backgrounds.jpg";
import aboveBack from "../src/assets/backing.png";

function App() {
  return (
    <div
      dir="ltl"
      className="bg-cover w-full h-full bg-no-repeat bg-opacity-75 bg-pantone"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div
        className={`bg-cover w-full h-full bg-no-repeat`}
        style={{ backgroundImage: `url(${aboveBack})` }}
      >
        <NavBar />
        <SoonMsg />
        <Media />
      </div>
    </div>
  );
}

export default App;
