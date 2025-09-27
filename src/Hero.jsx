import React, { useState, useEffect } from "react";
import Sl1 from "./assets/Green(1).jpg";
import Sl2 from "./assets/Green(2).jpg";
import Sl3 from "./assets/Green(3).jpg";
import Sl4 from "./assets/Green(4).jpg";

const images = [Sl1, Sl2, Sl3, Sl4];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full md:h-[100vh] h-screen overflow-hidden">
      <img
        src={images[current]}
        alt="Hero current"
        className={`absolute w-full h-full object-cover transition-opacity duration-1000`}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">The Perfect Home</h1>
      </div>
    </div>
  );
}
