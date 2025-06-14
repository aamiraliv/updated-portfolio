import React from "react";
import { Home } from "./Home";
import Aurora from "../components/Aurora";
import { SlideTabs } from "../components/SlideTabs";
import SimpleDock from "../components/DockContainer";

export const Layout = () => {
  return (
    <div className="bg-[#060010] min-h-screen relative">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Aurora
          colorStops={["#3A29FF", "#9c2bff", "#3A29FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="relative z-10 flex justify-center pt-4">
        <SlideTabs />
      </div>

      <div className="relative z-10">{/* <Home /> or other components */}</div>

      
    </div>
  );
};
