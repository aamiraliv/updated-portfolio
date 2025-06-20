import { LuArrowRight, LuMapPin } from "react-icons/lu";
import { Globe } from "../library/Globe";
import { IconCloudDemo } from "./IconCloudDemo";

const MyDisplay = () => {
  return (
    <div className="mx-auto grid w-full auto-rows-[21rem] grid-cols-6 gap-4 md:max-w-full md:auto-rows-[19rem] my-20">
      <div className="col-span-6 md:col-span-3 lg:col-span-4 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.2)] [box-shadow:0_-20px_80px_-20px_#ffffff2f_inset]"></div>

      {/* globe */}
      <div className="group col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.2)] [box-shadow:0_-20px_80px_-20px_#ffffff2f_inset] relative overflow-hidden ">
        <h1 className="mt-4 w-full bg-linear-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-center text-2xl leading-[100%] font-bold tracking-tighter text-balance text-transparent select-none md:mt-12 absolute z-100">
          I’m available for communication
          <br /> regardless of the time zone
        </h1>
        <div className="absolute -bottom-44 w-[1200px] -left-24 ">
          <Globe className="" />
        </div>
        <div className="pointer-events-none z-30 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 absolute bottom-0 w-full ">
          <LuMapPin
            size={48}
            className="text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 mb-1"
          />
          <h1 className="max-w-lg text-neutral-400 font-outfit">Remote</h1>
          <h1 className="text-xl font-semibold text-neutral-300 font-outfit">
            India -{" "}
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </h1>
        </div>
        <div className="pointer-events-none inset-0 linear absolute bottom-0 z-20"></div>
        <div className="absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-50 font-outfit ">
          <h4 className="text-neutral-300 flex items-center gap-2 font-bold cursor-pointer">
            Connect now{" "}
            <span className="pt-[2px]">
              <LuArrowRight />
            </span>
          </h4>
        </div>
      </div>

      {/* cloud */}

      <div className="col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.2)] [box-shadow:0_-20px_80px_-20px_#ffffff2f_inset] relative">
        <div className="h-full w-full absolute top-0 left-0">
          <IconCloudDemo />
        </div>
      </div>

      <div className="col-span-6 md:col-span-3 lg:col-span-2 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.2)] [box-shadow:0_-20px_80px_-20px_#ffffff2f_inset]"></div>
      <div className="col-span-6 md:col-span-6 lg:col-span-4 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.2)] [box-shadow:0_-20px_80px_-20px_#ffffff2f_inset]"></div>
    </div>
  );
};

export default MyDisplay;
