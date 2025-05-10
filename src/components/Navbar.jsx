import React from "react";
import pearl from "../assets/pearl.webp";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/story", label: "Story" },
  { path: "/cast-crew", label: "Cast & Crew" },
  { path: "/gallery", label: "Gallery" },
  { path: "/awards", label: "Awards" },
  { path: "/contact", label: "Contact" }
];

const Navbar = () => (
  <motion.nav
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-gradient-to-r from-[#a68cff70] to-[#e0e6f755] shadow-xl rounded-b-xl"
    style={{ boxShadow: '0 6px 32px 0 #a68cff22' }}
  >
    <div className="max-w-full mx-auto px-4 md:px-8 py-2 flex items-center justify-center gap-2 md:gap-8 lg:gap-10">
      <DynamicEchoTitle size="navbar" />
      <div className="flex gap-2 md:gap-5 lg:gap-8 rounded-xl bg-transparent px-2 md:px-4 py-1 max-w-7xl overflow-x-auto items-center scrollbar-hide whitespace-nowrap">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative px-2 md:px-4 py-2 uppercase tracking-wider font-semibold text-lg md:text-xl lg:text-2xl transition-all duration-200
              ${isActive ? "text-[#6ddcff]" : "hover:text-[#a68cff] text-ethereal"}`
            }
            end={item.path === "/"}
          >
            {({ isActive }) => (
              <span className="relative flex flex-col items-center">
                <motion.span
                  whileHover={{
                    scale: 1.15,
                    color: "#a68cff",
                    textShadow: "0 0 8px #a68cff, 0 0 16px #fff3"
                  }}
                  transition={{ type: "spring", stiffness: 420, damping: 22 }}
                  className="z-10"
                  style={{ display: 'inline-block' }}
                >
                  {item.label}
                </motion.span>
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                  style={{
                    background: isActive
                      ? 'linear-gradient(90deg,#6ddcff 0%,#a68cff 50%,#232c6a 100%)'
                      : 'linear-gradient(90deg,#a68cff33 0%,#6ddcff22 100%)',
                    opacity: isActive ? 1 : 0,
                    boxShadow: isActive ? '0 0 12px #6ddcff99, 0 0 8px #a68cff77' : 'none',
                    transition: 'opacity 0.2s, box-shadow 0.2s'
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scaleX: isActive ? 1 : 0.6
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                />
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  </motion.nav>
);

// --- DYNAMIC ECHO TITLE COMPONENT (SHARED) ---
const DynamicEchoTitle = ({ size = "home" }) => {
  const letters = size === "navbar" ? ["e", "c", "h", "pearl"] : ["E", "C", "H", "O"];
  const [hovered, setHovered] = React.useState(null);
  const sizeClass = size === "navbar"
    ? "text-xl md:text-2xl lg:text-3xl normal"
    : "text-7xl md:text-8xl lg:text-9xl tracking-wide font-serif";
  return (
    <div className={`flex gap-1 select-none cursor-pointer relative drop-shadow-2xl ${sizeClass} ${size === 'navbar' ? 'am-amaral' : 'font-serif tracking-wide  uppercase'}`}
      style={{ WebkitTextStroke: "1.5px #e0e6f7" }}>
      {letters.map((char, idx) => {
        let animate = {};
        let transition = { type: "spring", stiffness: 420, damping: 24 };
        if (hovered === idx) {
          animate = {
            y: size === "navbar" ? -7 : -28,
            x: size === "navbar" ? 5 : 18,
            scale: 1.18,
            color: "#a68cff",
            zIndex: 10,
            textShadow: "0 0 8px #a68cff, 0 0 16px #fff3"
          };
        } else if (hovered !== null && Math.abs(idx - hovered) === 1) {
          animate = {
            x: idx < hovered ? (size === "navbar" ? -6 : -22) : (size === "navbar" ? 6 : 22),
            y: size === "navbar" ? -2 : -10,
            scale: 0.98,
            color: "#b6b6d6",
            opacity: 0.82,
            zIndex: 5
          };
        } else if (hovered !== null) {
          animate = {
            x: 0,
            y: 0,
            scale: 0.94,
            color: "#e0e6f7",
            opacity: 0.55,
            zIndex: 1
          };
        } else {
          animate = {
            x: 0,
            y: 0,
            scale: 1,
            color: "#e0e6f7",
            opacity: 1,
            zIndex: 1
          };
        }
        return (
          <motion.span
            key={idx}
            className="relative"
            animate={animate}
            transition={transition}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            style={{ cursor: "pointer", display: "inline-block" }}
          >
            {[1,2,3].map((n) => (
              <span
                key={n}
                className="absolute left-0 top-0 w-full h-full pointer-events-none"
                style={{
                  zIndex: 0,
                  filter: `blur(${n*(size==="navbar"?2:4.5)}px)` ,
                  opacity: 0.18 - n*0.03,
                  transform: `translateY(${n*(size==="navbar"?4:18)}px)`
                }}
              >
                {char !== "pearl" ? char : "o"}
              </span>
            ))}
            {char !== "pearl" ? (
              <span className="relative z-10">{char}</span>
            ) : (
              <img
                src={pearl}
                alt="pearl"
                className="relative z-10 inline-block -ml-1"
                style={{ width: size === "navbar" ? "0.9em" : "0.8em", height: size === "navbar" ? "0.9em" : "0.8em", objectFit: "contain", verticalAlign: "middle", filter: hovered === idx ? "drop-shadow(0 0 8px #a68cff)" : "none" }}
                draggable={false}
              />
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

export default Navbar;

