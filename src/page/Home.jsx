import React from "react";
import personalImage from "../assets/personal-image.jpg";
import ShinyText from "../library/ShinyText";

export const Home = () => {
  return (
    <div>
      <div className="h-screen overflow-hidden relative">
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          
        </div>
        <div className="absolute inset-0 z-0 h-full w-full">
          <img
            src={personalImage}
            alt="Personal"
            className="object-cover object-top justify-center w-full h-full"
            style={{ objectPosition: 'center center' }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center h-28 bg-gradient-to-b from-transparent to-black"></div>
      </div>
    </div>
  );
};
