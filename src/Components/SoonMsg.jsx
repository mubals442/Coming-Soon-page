import React from "react";
import Counter from "./Counter";
import { Typewriter } from "react-simple-typewriter";

function SoonMsg() {
  return (
    <div className="bg-opacity-75 bg-pantone flex flex-col h-screen items-center">
      <h1
        className="font-ExtraBold mb-7 text-4xl md:text-6xl lg:text-8xl text-brown dark:text-brown lg:mt-32 sm:mt-32 mt-32"
        dir="rtl"
      >
        <Typewriter
          words={["قريبا بحلة جديدة...", "دار الرحمة للإستشارات"]}
          loop={true}
          cursor
          cursorColor="black"
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={180}
          delaySpeed={2000}
        />
      </h1>
      <p className="font-ExtraBold mb-16 text-brown dark:text-brown text-2xl md:text-4xl">
        التفاصيل تصنع الجودة...والخبرة فارق
      </p>
      <span className="">
        <Counter targetDate={"2025-01-06T23:59:59"} />
      </span>
    </div>
  );
}

export default SoonMsg;