import React, { useState } from "react";
import SiteLogo from "../assets/siteLogo.png";
import wings from "../assets/wings.svg";
import crumpledPaper from "../assets/crumpled-paper.avif";
import copy from "copy-to-clipboard";

export const UserLogo = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const success = copy("amiralivillan@gmail.com");
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };
  return (
    <div className="size-full relative">
      <div className="  flex size-full flex-col items-center justify-center bg-cover bg-center">
        <div className="absolute inset-0 w-full h-1/2 max-w-md items-start justify-center rounded-lg backdrop-blur-md">
          <img
            src={crumpledPaper}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />

          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#060010]  to-transparent to-40%" />
        </div>

        <div className="relative mt-2">
          <img
            aria-hidden="true"
            draggable="false"
            alt="wings"
            className="opacity-0 select-none dark:opacity-100"
            src={wings}
          />
          {/* New Gradient Logo */}
          <div className="absolute top-1/2 left-1/2 z-50 w-16 h-16 -translate-x-1/2 -translate-y-1/2 md:w-20 md:h-20">
            <img src={SiteLogo} alt="" />
          </div>
        </div>

        <span
          className="relative bg-gradient-to-b from-[#edeffd] to-[#530180] bg-clip-text  w-full text-center text-3xl font-bold text-balance -translate-y-4 py-2"
          tabIndex="0"
        >
          <span
            className="animate-shine text-transparent "
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              animation: "shine 3s ease-in-out infinite",
            }}
          >
            Let's work together on your next project
          </span>
        </span>

        <div className="relative flex">
          <button
            type="button"
            onClick={copyToClipboard}
            className="items-center gap-2 py-3 text-base font-light text-black dark:text-white/75 outline-none transition-all duration-300 cursor-pointer hover:text-black/60 dark:hover:text-white/90 flex w-full justify-center rounded-md bg-white/10 px-8 shadow-[inset_0_3px_10px_#ffffff3f] relative overflow-hidden z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-copy"
              aria-hidden="true"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
            </svg>
            {isCopied ? "Copied to clipboard!" : "amiralivillan@gmail.com"}
          </button>
        </div>

        <style jsx>{`
          @keyframes shine {
            0% {
              background-position: -200% 0;
            }
            50% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }

          .animate-shine {
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.4) 50%,
              transparent 100%
            );
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            animation: shine 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
};
