import React from "react";

function Media() {
  return (
    <footer className="flex  fixed bottom-0 left-0 p-6 z-20 w-full md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <ul className="flex justify-center  mt-3 text-sm font-medium text-gray-100 dark:text-gray-100 sm:mt-0">
        <li className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"
            />
          </svg>
          <a href="#" className="hover:underline me-4 md:me-6 mr-2" >
          info@DRconsultancy.sa
          </a>
        </li>
        <li className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.75 2A2.25 2.25 0 0 1 18 4.25v6.769a6.5 6.5 0 0 0-6.385 9.245L11.087 22H8.25A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zM21 13.256A5.48 5.48 0 0 0 17.501 12a5.5 5.5 0 0 0-4.812 8.169l-.666 2.186a.5.5 0 0 0 .624.625l2.187-.666A5.501 5.501 0 0 0 21 13.256M15.5 17a.5.5 0 1 1 0-1h4.002a.5.5 0 1 1 0 1zm2.001 2h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1"
            />
          </svg>
          <a href="#" className="hover:underline me-4 md:me-6 mr-2">
          +966 012 527 3014
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Media;
