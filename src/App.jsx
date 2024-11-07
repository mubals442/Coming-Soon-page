import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import SoonMsg from "./Components/SoonMsg";
import Media from "./Components/Media";
import aboveBack from "../src/assets/nakhla_green_bg.png";

function App() {
  return (
    <div
      dir="ltl"
      className="bg-cover w-screen h-screen overflow-hidden bg-no-repeat bg-opacity-75 bg-pantone"
    >
      <div
        className={`bg-cover md:bg-top bg-center w-full h-full bg-no-repeat `}
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