import React from "react";
import logo from '/src/assets/Picture2.png'

function NavBar() {
  return (
    <nav className="bg-inherit border-gray-200 dark:bg-gray-900">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={logo}
            className="h-32"
            alt="Flowbite Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border bg-inherit md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-inherit dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="px-4 py-2">
              <a
                href="#"
                className="block py-2 px-3 text-gray-100 rounded  md:border-0  md:p-0 dark:text-white hover:text-opacity-45 hover:text-orange-800 "
                aria-current="page"
              >
                الرئيسية
              </a>
            </li>
            <li className="px-4 py-2">
              <a
                href="#"
                className="block py-2 px-3 text-gray-100 rounded  md:border-0  md:p-0 dark:text-white hover:text-opacity-45 hover:text-orange-800 "
              >
                من نحن
              </a>
            </li>
            <li className="px-4 py-2">
              <a
                href="#"
                className="block py-2 px-3 text-gray-100 rounded  md:border-0  md:p-0 dark:text-white hover:text-opacity-45 hover:text-orange-800 "
              >
                خدماتنا
              </a>
            </li>
            <li className="px-4 py-2">
              <a
                href="#"
                className="block py-2 px-3 text-gray-100 rounded  md:border-0  md:p-0 dark:text-white hover:text-opacity-45 hover:text-orange-800 "
              >
                المشاريع
              </a>
            </li>
            <li className="border-2 border-white px-8 py-2 rounded-3xl hover:bg-opacity-45 hover:bg-orange-800 hover:border-none">
              <a
                href="#"
                className="block py-2 px-9 text-gray-100 rounded md:border-0 md:p-0 dark:text-white "
              >
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
