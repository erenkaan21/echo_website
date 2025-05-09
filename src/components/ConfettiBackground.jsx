import React from "react";
import { motion } from "framer-motion";

// Simple confetti shapes/colors
const CONFETTI_COLORS = [
  "#FFD700", // Gold
  "#A68CFF", // Dreamy Purple
  "#FF6B6B", // Red
  "#7CF6FF", // Aqua
  "#FFFACD", // Light Yellow
  "#E0C3FC", // Lavender
  "#B5FFFC", // Light Aqua
];

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

const ConfettiPiece = ({ i }) => {
  const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
  const left = `${randomBetween(0, 100)}%`;
  const delay = randomBetween(0, 2);
  const duration = randomBetween(2.5, 4.5);
  const size = randomBetween(8, 18);
  const rotate = randomBetween(-80, 80);

  return (
    <motion.div
      style={{
        position: "absolute",
        left,
        top: "-30px",
        width: size,
        height: size * 0.65,
        background: color,
        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        opacity: 0.85,
        zIndex: 0,
        rotate,
        boxShadow: `0 2px 8px 0 ${color}44`,
      }}
      initial={{ y: 0, opacity: 0.7 }}
      animate={{ y: "110vh", opacity: [0.7, 0.85, 0.7, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

const ConfettiBackground = ({ children, count = 24 }) => (
  <div className="relative w-full">
    {/* Confetti Layer */}
    <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden -z-10">
      {Array.from({ length: count }).map((_, i) => (
        <ConfettiPiece key={i} i={i} />
      ))}
    </div>
    {/* Content Layer */}
    <div className="relative z-10">{children}</div>
  </div>
);

export default ConfettiBackground;
