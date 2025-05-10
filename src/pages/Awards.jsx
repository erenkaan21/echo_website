import React from "react";
import { movie } from "../data/movie";
import { motion } from "framer-motion";
import poster from "../assets/poster.webp";
import ConfettiBackground from "../components/ConfettiBackground.jsx";
import PressLinksSection from "../components/PressLinksSection.jsx";
import award1 from "../assets/award1.webp";
import award2 from "../assets/award2.webp";
import award3 from "../assets/award3.webp";
import award4 from "../assets/award4.webp";
import award5 from "../assets/award5.webp";
import award6 from "../assets/award6.webp";
import award7 from "../assets/award7.webp";
import award8 from "../assets/award8.webp";
import award9 from "../assets/award9.webp";

const awardImages = [award1, award2, award3, award4, award5, award6, award7, award8, award9];

const Awards = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 mt-8 overflow-hidden">
    {/* Blurred poster background */}
    <div className="fixed inset-0 w-full h-full -z-10">
      <img
        src={poster}
        alt="Film Poster Background"
        className="object-cover w-full h-full"
        style={{ filter: "blur(8px) brightness(0.45) saturate(1.1)", opacity: 0.92 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#181b2e88] via-[#181b2e44] to-[#2a1c3bEE]" />
    </div>
    {/* Awards Section (now at top) */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full max-w-3xl text-center"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-2xl md:text-4xl font-extrabold uppercase tracking-widest text-white text-center mb-2 drop-shadow-[0_2px_16px_#a68cff99] bg-gradient-to-r from-ethereal via-dreamy to-ethereal bg-clip-text text-transparent"
      >
        Awards & Recognitions
      </motion.h2>
      <div className="mx-auto mb-2 w-full max-w-md text-sm md:text-base text-ethereal/90 text-center font-semibold tracking-wide mb-4">
        Celebrating our journey through film festivals, jury selections, and special recognitions from around the world.
      </div>
      <div className="mx-auto mb-4 w-20 h-0.5 rounded-full bg-gradient-to-r from-dreamy/0 via-dreamy/80 to-dreamy/0 blur-[1.5px] opacity-80" />
      {/* Awards Grid */}
      <ConfettiBackground>
        <motion.div
          className="flex flex-col gap-6 mb-8 py-4 max-w-3xl mx-auto items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.13 }
            }
          }}
        >
          {/* First row: 4 images */}
          <div className="grid grid-cols-2 gap-3 w-full md:flex md:flex-row md:gap-6 md:justify-center">
            {awardImages.slice(0, 4).map((img, i) => (
              <motion.div
                key={i}
                className="relative flex items-center justify-center w-full aspect-square bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-ethereal/30 hover:border-dreamy/80 transition-all duration-300 group overflow-hidden flex-shrink-0 md:w-48 md:h-48 md:aspect-auto"
                initial={{ opacity: 0, scale: 0.88, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.08, boxShadow: "0 0 32px 8px #a68cff55" }}
                transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              >
                <motion.img
                  src={img}
                  alt={`Award ${i+1}`}
                  className="w-4/5 h-4/5 object-contain drop-shadow-xl select-none pointer-events-none"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  draggable="false"
                />
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.35 }}
                  style={{
                    background: 'radial-gradient(circle at 60% 30%, #a68cff66 0%, transparent 70%)',
                    mixBlendMode: 'screen'
                  }}
                />
              </motion.div>
            ))}
          </div>
          {/* Second row: 5 images */}
          <div className="grid grid-cols-2 gap-3 w-full md:flex md:flex-row md:gap-6 md:justify-center md:mt-4 !mt-0">
            {awardImages.slice(4, 9).map((img, i) => (
              <motion.div
                key={i+4}
                className="relative flex items-center justify-center w-full aspect-square bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-ethereal/30 hover:border-dreamy/80 transition-all duration-300 group overflow-hidden flex-shrink-0 md:w-48 md:h-48 md:aspect-auto"
                initial={{ opacity: 0, scale: 0.88, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.08, boxShadow: "0 0 32px 8px #a68cff55" }}
                transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              >
                <motion.img
                  src={img}
                  alt={`Award ${i+5}`}
                  className="w-4/5 h-4/5 object-contain drop-shadow-xl select-none pointer-events-none"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  draggable="false"
                />
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.35 }}
                  style={{
                    background: 'radial-gradient(circle at 60% 30%, #a68cff66 0%, transparent 70%)',
                    mixBlendMode: 'screen'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </ConfettiBackground>
      {/* Press & Interviews Section (below awards) */}
      <PressLinksSection />
    </motion.div>
  </section>
);

export default Awards;
