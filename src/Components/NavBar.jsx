import React from "react";
import logo from '/src/assets/logoDRC.png'

function NavBar() {
  return (
    <nav dir="rtl" className="bg-inherit border-gray-200 dark:bg-gray-900 bg-opacity-75 bg-pantone">
      <div className="flex flex-wrap items-center md:justify-start justify-center mx-auto p-4">

          <img
            src={logo}
            className="w-64 mt-5"
            alt="dar alrahmah Logo"
          />
      </div>
    </nav>
  );
}

export default NavBar;