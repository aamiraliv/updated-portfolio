import React from "react";
import { Home } from "./Home";
import Aurora from "../library/Aurora";
import { SlideTabs } from "../components/SlideTabs";
import { Dock, DockIcon } from "../library/DockContainer";
import { Github, Linkedin } from "lucide-react";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import SplashCursor from "../library/SplashCursor";
import logo from "../assets/logo.png"

export const Layout = () => {
  return (
    <div className="bg-[#060010] min-h-screen select-none relative">
      <SplashCursor />
      <div className="absolute inset-0 z-10 h-full w-full">
        <Aurora
          colorStops={["#0f0c29", "#302b63", "#24243e"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="logo hidden md:block fixed top-0 left-0 z-50 ">
        <img src={logo} alt="logo" className="h-20"/>
      </div>
      <div className="fixed top-0 left-0 right-0 flex justify-center p-4 z-[100]">
        <SlideTabs />
      </div>

      <main className="">
        <Outlet />
      </main>

      <div className="fixed bottom-0 left-0 right-0 flex justify-center p-4 z-[100]">
        <Dock
          iconSize={50}
          iconMagnification={72}
          iconDistance={150}
          direction="middle"
        >
          <DockIcon href="https://github.com/aamiraliv">
            <FaGithub size={20} className="text-white/60" />
          </DockIcon>
          <DockIcon href="https://linkedin.com/in/amir-ali-v-9ab1912aa">
            <FaLinkedin size={20} className="text-white/60" />
          </DockIcon>
          <DockIcon href="https://leetcode.com/u/aamirv/">
            <TbBrandLeetcode size={20} className="text-white/60" />
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
};
