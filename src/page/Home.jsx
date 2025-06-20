import React from "react";
import personalImage from "../assets/personal-image.jpg";
import { ShineBorder } from "../library/ShineBorder";
import { cn } from "../lib/utils";
import { AnimatedShinyText } from "../library/AnimatedShinyText";
import { ArrowRightIcon } from "lucide-react";
import { TextShimmer } from "../library/TextShimmer";
import MyDisplay from "../components/BentoGrid";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="h-screen flex flex-col gap-4 overflow-hidden relative">
        <div className="absolute select-none inset-0 z-20 flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-100 dark:border-white/15 dark:bg-transparent dark:hover:bg-neutral-800"
              )}
            >
              {/* <CoolMode> */}
              <AnimatedShinyText className="inline-flex select-none items-center justify-center px-4 py-1 transition ease-out text-sm hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ I help brands turn bold ideas !</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
              {/* </CoolMode> */}
            </div>
            <TextShimmer className="font-mono text-[15px]" duration={2}>
              into beautiful & functional digital products.
            </TextShimmer>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-7xl font-bold text-neutral-400/50 font-poiret tracking-wide">
              Hi, I’m <span className="text-neutral-400">Amir Ali V</span>
            </h1>
            <p className="text-lg font-mono text-neutral-400/50 tracking-wide">
              Full Stack Developer | UI/UX Enthusiast
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <TextShimmer className="font-mono text-[15px]" duration={2}>
              crafting seamless web experiences.
            </TextShimmer>
            <p className="text-sm font-poiret text-neutral-400/50 tracking-wide">
              Currently building full-stack apps using React, Tailwind, Spring
              Boot & Microservices ☁️
            </p>
          </div>
        </div>

        <div className="absolute -right-2 top-0 z-20 flex w-[200px] rounded-l-full h-full ">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        </div>

        <div className="absolute -left-2 top-0 z-20 flex w-[200px]  rounded-r-full h-full ">
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
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center h-28 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="flex p-14 justify-center items-center">
        <MyDisplay />
      </div>
    </div>
  );
};
