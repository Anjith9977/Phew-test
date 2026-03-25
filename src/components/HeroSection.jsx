import React from "react";

function HeroSection() {
  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] bg-cover bg-auto"
      style={{
        backgroundImage: "url('/HeroSection.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-widest">
          MENU
        </h1>

        <p className="text-gray-300 text-sm md:text-base max-w-xl mt-4 leading-relaxed">
          Please take a look at our menu featuring food, drinks, and brunch. 
          If you'd like to place an order, use the "Order Online" button located below the menu.
        </p>

      </div>
    </div>
  );
}

export default HeroSection;