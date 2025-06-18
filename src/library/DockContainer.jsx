"use client";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";
import { cn } from "../lib/utils";

const DEFAULT_SIZE = 32; // Reduced from 40
const DEFAULT_MAGNIFICATION = 48; // Reduced from 60
const DEFAULT_DISTANCE = 120; // Reduced from 140

const dockVariants = cva(
  "mx-auto mt-8 flex h-[48px] w-max items-center justify-center gap-1.5 rounded-2xl p-1.5 " +
    // Enhanced glassmorphism effect
    "bg-white/[0.08] dark:bg-white/[0.05] " +
    "backdrop-blur-xl " +
    "border border-white/[0.15] dark:border-white/[0.08] " +
    "shadow-lg shadow-black/[0.03] dark:shadow-black/[0.15] " +
    // Inner glow effect
    "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b " +
    "before:from-white/[0.12] before:to-transparent before:pointer-events-none " +
    // Outer glow
    "after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-b " +
    "after:from-transparent after:to-black/[0.03] after:pointer-events-none " +
    "relative"
);

const Dock = React.forwardRef(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mouseX,
            size: iconSize,
            magnification: iconMagnification,
            distance: iconDistance,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  onClick,
  ...props
}) => {
  const ref = useRef(null);
  const padding = Math.max(4, size * 0.15); // Reduced padding
  const defaultMouseX = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size]
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.08, // Slightly more responsive
    stiffness: 180, // Increased stiffness
    damping: 14, // Slightly more damping
  });

  // Additional scale for hover effect
  const hoverScale = useMotionValue(1);
  const smoothHoverScale = useSpring(hoverScale, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });

  const handleClick = (e) => {
    if (href) {
      if (target === "_blank") {
        window.open(href, target, rel ? `rel=${rel}` : "");
      } else {
        window.location.href = href;
      }
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        width: scaleSize,
        height: scaleSize,
        padding,
        scale: smoothHoverScale,
      }}
      onMouseEnter={() => hoverScale.set(1.1)}
      onMouseLeave={() => hoverScale.set(1)}
      onClick={handleClick}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-xl " +
          "transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
