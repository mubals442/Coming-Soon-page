import React from "react";
import Counter from "./Counter";
import {Typewriter} from 'react-simple-typewriter'

function SoonMsg() {
  return (
    <div className="bg-opacity-75 bg-pantone flex flex-col-reverse h-screen justify-center items-center">
      <Counter />
      <h1 className="mb-4 text-4xl font-medium dark:text-white md:text-5xl lg:text-6xl text-brown">
         <Typewriter
         words={['...قريبا بحلة جديدة',"دار الرحمة للإستشارات"]}
         loop ={true}
         cursor
         cursorColor="black"
         cursorStyle="|"
         typeSpeed={100}
         deleteSpeed={80}
         delaySpeed={1000}
         />
      </h1>
    </div>
  );
}

export default SoonMsg;
