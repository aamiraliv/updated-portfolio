import React from "react";
import { motion } from "framer-motion";

export const SlideTabs = () => {
  const [position, setPosition] = React.useState({
    left: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-0.5"
    >
      <Tab setPosition={setPosition}>home</Tab>
      <Tab setPosition={setPosition}>about</Tab>
      <Tab setPosition={setPosition}>projects</Tab>
      <Tab setPosition={setPosition}>contact</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = React.useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width, height } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          height,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-sm text-white/60 hover:text-white transition-colors duration-200"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      style={{
        height: position.height || 0,
      }}
      className="absolute z-0 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-inner"
    />
  );
};
