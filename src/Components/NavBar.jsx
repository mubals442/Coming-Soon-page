import React from "react";
import logo from '/src/assets/logoDRC.png'

function NavBar() {
  return (
    <nav dir="rtl" className="bg-inherit border-gray-200 dark:bg-gray-900 bg-opacity-75 bg-pantone">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">

          <img
            src={logo}
            className="h-14 W-15 md:h-20 md:W-15 mt-5"
            alt="dar alrahmah Logo"
          />
      </div>
    </nav>
  );
}

export default NavBar;
