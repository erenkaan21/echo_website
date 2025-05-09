import React from "react";

// Animated background with glowing particles
const Background = () => (
  <div
    aria-hidden
    className="fixed inset-0 -z-10 w-full h-full bg-gradient-main overflow-hidden"
    style={{ pointerEvents: "none" }}
  >
    {/* Glowing particles */}
    <svg className="absolute left-1/4 top-1/4 animate-pulse" width="400" height="400">
      <defs>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a18cd1" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3a1c5c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="180" fill="url(#glow1)" />
    </svg>
    <svg className="absolute right-1/4 bottom-1/4 animate-pulse delay-500" width="300" height="300">
      <defs>
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbc2eb" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1a223f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="140" fill="url(#glow2)" />
    </svg>
    {/* Subtle noise overlay */}
    <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{background: "url('https://www.transparenttextures.com/patterns/stardust.png') repeat"}} />
  </div>
);

export default Background;
