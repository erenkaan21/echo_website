import React from "react";
import { movie } from "../data/movie";
import { motion } from "framer-motion";
import poster from "../assets/poster.webp";
import pearl from "../assets/pearl.webp";


const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// --- DYNAMIC ECHO TITLE COMPONENT ---
const DynamicEchoTitle = () => {
  const letters = ["e", "c", "h", "pearl"];
  const [hovered, setHovered] = React.useState(null);
  return (
    <div className="flex gap-1 select-none cursor-pointer relative">
      {letters.map((char, idx) => {
        // Main animation logic:
        let animate = {};
        let transition = { type: "spring", stiffness: 420, damping: 24 };
        if (hovered === idx) {
          animate = {
            y: -28,
            x: 18,
            scale: 1.18,
            color: "#a68cff",
            zIndex: 10,
            textShadow: "0 0 16px #a68cff, 0 0 32px #fff3"
          };
        } else if (hovered !== null && Math.abs(idx - hovered) === 1) {
          animate = {
            x: idx < hovered ? -22 : 22,
            y: -10,
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
            className="relative text-7xl md:text-8xl lg:text-9xl drop-shadow-2xl font-serif tracking-wide"
            animate={animate}
            transition={transition}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            style={{ WebkitTextStroke: "1.5px #e0e6f7", cursor: "pointer", display: "inline-block", fontFamily: 'Georgia, Times, Times New Roman, serif' }}
          >
            {/* Echo effect shadows */}
            {[1,2,3].map((n) => (
              <React.Fragment key={n}>
                {/* Shadow below */}
                <span
                  className="absolute left-0 top-0 w-full h-full pointer-events-none"
                  style={{
                    zIndex: 0,
                    filter: `blur(${n*6}px)`,
                    opacity: 0.12 - n*0.02,
                    transform: `translateY(${n*32}px)`,
                    fontFamily: 'Georgia, Times, Times New Roman, serif'
                  }}
                >
                  {char !== "pearl" ? char : "o"}
                </span>
                {/* Shadow above */}
                <span
                  className="absolute left-0 top-0 w-full h-full pointer-events-none"
                  style={{
                    zIndex: 0,
                    filter: `blur(${n*6}px)`,
                    opacity: 0.12 - n*0.02,
                    transform: `translateY(-${n*32}px)`,
                    fontFamily: 'Georgia, Times, Times New Roman, serif'
                  }}
                >
                  {char !== "pearl" ? char : "o"}
                </span>
              </React.Fragment>
            ))}
            {char !== "pearl" ? (
              <span className="relative z-10">{char}</span>
            ) : (
              <img
                src={pearl}
                alt="pearl"
                className="relative z-10 inline-block -ml-3"
                style={{ width: "0.8em", height: "0.8em", objectFit: "contain", verticalAlign: "middle", filter: hovered === idx ? "drop-shadow(0 0 16px #a68cff)" : "none", fontFamily: 'Georgia, Times, Times New Roman, serif' }}         draggable={false}
              />
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

const Home = () => (
  <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0 w-full h-full -z-10">
      <img
        src={poster}
        alt="Film Poster Background"
        className="object-cover w-full h-full"
        style={{ filter: "blur(8px) brightness(0.45) saturate(1.1)", opacity: 0.92 }}
      />
      {/* Gradient overlay for extra cinematic look */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#181b2e88] via-[#181b2e44] to-[#2a1c3bEE]" />
    </div>
    {/* HERO SECTION LAYOUT */}
    <div className="flex flex-col md:flex-row items-center justify-center mt-20 w-full px-4 max-w-6xl mx-auto gap-10 md:gap-16">
      {/* Left: Title, tagline, trailer */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <DynamicEchoTitle />
        <p className="mt-2 md:mt-4 text-lg md:text-2xl text-ethereal italic font-light max-w-2xl">
          {movie.tagline}
        </p>
        {/* Trailer embed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 md:mt-12 w-full flex justify-center md:justify-start"
        >
          <div className="w-[90vw] md:w-[480px] lg:w-[560px] aspect-video rounded-xl shadow-dreamy overflow-hidden border-4 border-ethereal/30">
            <iframe
              src={movie.trailerUrl}
              title="Echo Trailer"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
      {/* Right: Poster */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center flex-shrink-0"
      >
        <div className="w-52 h-[312px] md:w-72 md:h-[432px] lg:w-96 lg:h-[576px] xl:w-[28rem] xl:h-[672px] rounded-2xl shadow-2xl border-4 border-ethereal/20 bg-[#23233a] overflow-hidden flex items-center justify-center">
          <motion.img
            src={poster}
            alt="Film Poster"
            className="w-full h-full object-fill"
            style={{ boxShadow: '0 8px 48px 0 rgba(60,40,120,0.50), 0 2px 12px 0 rgba(0,0,0,0.33)' }}
            whileHover={{ scale: 1.045, filter: 'brightness(1.08) drop-shadow(0 0 32px #a68cff99)' }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          />
        </div>
      </motion.div>
    </div>

  </section>
);

export default Home;
