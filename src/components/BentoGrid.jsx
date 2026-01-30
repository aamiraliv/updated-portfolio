import { LuArrowRight, LuMapPin } from "react-icons/lu";
import { IconCloudDemo } from "./IconCloudDemo";
import { Globe } from "../library/Globe";
import { UserLogo } from "./UserLogo";
import { DotPattern } from "../library/DotBackground";
import { cn } from "../lib/utils";
import Technology from "./Technology";
import { ArrowRight, Code } from "lucide-react";

const MyDisplay = () => {
  return (
    <div className="mx-auto grid w-full auto-rows-[21rem] grid-cols-6 gap-4 md:max-w-full md:auto-rows-[19rem] my-20">
      <div className="col-span-6 md:col-span-3 lg:col-span-4 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff2f_inset] relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden z-[100]">
          <Technology />
        </div>
        <div className="pointer-events-none z-30 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 absolute bottom-0 w-full z-[101]">
          <Code
            size={40}
            className="text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 mb-1"
          />
          <h1 className="max-w-lg text-neutral-400 font-outfit">Tech Stack</h1>
        </div>
        <div className="absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-[101] font-outfit">
          <h4 className="text-neutral-300 flex items-center gap-2 font-bold cursor-pointer">
            Explore Stack{" "}
            <span className="pt-[2px]">
              <ArrowRight />
            </span>
          </h4>
        </div>
      </div>

      {/* globe */}
      <div className="group col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff2f_inset] relative overflow-hidden">
        <h1 className="mt-4 w-full bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-center text-2xl leading-[100%] font-bold tracking-tighter text-balance text-transparent select-none md:mt-12 absolute z-[100]">
          I'm available for communication
          <br /> regardless of the time zone
        </h1>

        <div className="absolute -bottom-44 w-[1200px] -left-24 z-10">
          <Globe className="" />
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 rounded-lg"></div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent z-[21] rounded-b-lg"></div>

        <div className="pointer-events-none z-30 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 absolute bottom-0 w-full">
          <LuMapPin
            size={48}
            className="text-neutral-200 transition-all duration-300 ease-in-out group-hover:scale-75 mb-1"
          />
          <h1 className="max-w-lg text-neutral-300 font-outfit">Remote</h1>
          <h1 className="text-xl font-semibold text-white font-outfit">
            India -{" "}
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </h1>
        </div>

        <div className="absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-50 font-outfit">
          <h4 className="text-white flex items-center gap-2 font-bold cursor-pointer">
            Connect now{" "}
            <span className="pt-[2px]">
              <LuArrowRight />
            </span>
          </h4>
        </div>
      </div>

      <div className=" col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff2f_inset] relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>
        <div className="h-full w-full absolute top-0 left-0">
          <h1 className="mt-4 w-full bg-gradient-to-b from-[#edeffd] to-[#901f00] bg-clip-text text-center text-2xl leading-[100%] font-bold tracking-tighter text-balance text-transparent select-none md:mt-12 absolute z-[100]">
            Tools that help me turn
            <br /> visions into reality
          </h1>

          <IconCloudDemo />
        </div>
      </div>

      <div className="col-span-6 md:col-span-3 lg:col-span-2 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff2f_inset]">
        <UserLogo />
      </div>
      <div className="hide-scrollbar col-span-6 md:col-span-6 lg:col-span-4 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff2f_inset] relative overflow-x-scroll z-[99]">
        <div class="absolute inset-0 ">
          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/playlist/5UPKIYN3QMs7CP0xfVoDPQ?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MyDisplay;
