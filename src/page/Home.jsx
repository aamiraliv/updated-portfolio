import React from "react";
import personalImage from "../assets/personal-image.jpg";
import { ShineBorder } from "../library/ShineBorder";
import { cn } from "../lib/utils";
import { AnimatedShinyText } from "../library/AnimatedShinyText";
import { ArrowRight } from "lucide-react";
import { TextShimmer } from "../library/TextShimmer";
import MyDisplay from "../components/BentoGrid";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col gap-2 sm:gap-4">
      <div className="h-screen flex flex-col gap-2 sm:gap-4 overflow-hidden relative">
        <div className="absolute select-none inset-0 z-20 flex flex-col gap-4 sm:gap-6 md:gap-10 items-center justify-center px-4 sm:px-8">
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-100 dark:border-white/15 dark:bg-transparent dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex select-none items-center justify-center px-2 sm:px-4 py-1 transition ease-out text-xs sm:text-sm hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ I help brands turn bold ideas !</span>
                <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
            <TextShimmer className="font-mono text-xs sm:text-[15px] text-center" duration={2}>
              into beautiful & functional digital products.
            </TextShimmer>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-400/50 font-poiret tracking-wide text-center">
              Hi, I'm <span className="text-neutral-400">Amir Ali V</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-mono text-neutral-400/50 tracking-wide text-center">
              Full Stack Developer | UI/UX Enthusiast
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <TextShimmer className="font-mono text-xs sm:text-[15px] text-center" duration={2}>
              crafting seamless web experiences.
            </TextShimmer>
            <p className="text-xs sm:text-sm font-poiret text-neutral-400/50 tracking-wide text-center max-w-md sm:max-w-none">
              Currently building full-stack apps using React, Tailwind, Spring
              Boot & Microservices ☁️
            </p>
          </div>
        </div>

        {/* Mobile: Top/Bottom borders */}
        <div className="absolute -top-1 left-0 z-20 flex h-[100px] rounded-b-full w-full sm:hidden">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        </div>

        <div className="absolute -bottom-1 left-0 z-20 flex h-[100px] rounded-t-full w-full sm:hidden">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        </div>

        {/* Desktop: Left/Right borders */}
        <div className="hidden sm:absolute sm:-right-2 sm:top-0 sm:z-20 sm:flex sm:w-[150px] md:w-[200px] sm:rounded-l-full sm:h-full">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        </div>

        <div className="hidden sm:absolute sm:-left-2 sm:top-0 sm:z-20 sm:flex sm:w-[150px] md:w-[200px] sm:rounded-r-full sm:h-full">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        </div>

        <div className="absolute inset-0 z-0 h-full w-full">
          <img
            src={personalImage}
            alt="Personal"
            className="object-cover object-top justify-center w-full h-full"
            style={{ objectPosition: "center center" }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center h-20 sm:h-28 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="flex p-4 sm:p-8 md:p-14 justify-center items-center">
        <MyDisplay />
      </div>
    </div>
  );
};