import React from "react";
import Counter from "./Counter";
import { Typewriter } from "react-simple-typewriter";

function SoonMsg() {
  return (
    <div className="bg-opacity-75 bg-pantone flex flex-col h-screen justify-center items-center">
      <h1
className="font-body mb-4 text-5xl md:text-8xl font-bold text-brown dark:text-brown"
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
      <p className="font-body mb-3 text-brown dark:text-brown text-3xl">
        التفاصيل تصنع الجودة...والخبرة فارق
      </p>
      <Counter targetDate={"2024-08-08T23:59:59"} />
    </div>
  );
}

export default SoonMsg;
