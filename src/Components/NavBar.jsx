import React from "react";
import logo from '/src/assets/LogoNav.png'

function NavBar() {
  return (
    <nav className="bg-inherit border-gray-200 dark:bg-gray-900 bg-opacity-75 bg-pantone">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={logo}
            className="h-12 mt-5"
            alt="Flowbite Logo"
          />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
