import React from 'react';
import NavBar from './Components/NavBar';
import SoonMsg from './Components/SoonMsg';
import Media from './Components/Media';
import back from '../src/assets/backgrounds.jpg';

function App() {
  return (
    <div 
      dir='rtl' 
      className="bg-cover w-full h-full bg-no-repeat bg-opacity-10 bg-black"
      style={{ backgroundImage: `url(${back})` }}
    >
      <NavBar />
      <SoonMsg />
      <Media />
    </div>
  );
}

export default App;
