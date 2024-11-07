import React, { useState } from "react";
import Email from "../assets/Icons/Email";
import Instagram from "../assets/Icons/Instagram";
import Xtw from "../assets/Icons/Xtw";


function Media() {
  const [icons, setIcon] = useState([
    { icon: <Email /> },
    { icon: <Instagram /> },
    { icon: <Xtw/> },
  ]);

  return (
    <footer className="flex  fixed bottom-0 left-0 z-20 w-full  items-center justify-center  p-6 dark:bg-gray-800 dark:border-gray-600 md:mt-20">
      <ul className="flex justify-center  mt-3 text-sm font-medium text-gray-100 dark:text-gray-100 sm:mt-0">
        {icons.map((element , index)=> <li key={index} className="flex  hover:transform hover:-translate-y-1 duration-500" >{element.icon}</li>)}
      </ul>
    </footer>
  );
}

export default Media;
