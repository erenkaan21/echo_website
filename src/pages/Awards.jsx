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
import award10 from "../assets/award10.png";
import award11 from "../assets/award11.png";
import award12 from "../assets/award12.png";
import reddot from "../assets/reddot.png";
import lpproduction from "../assets/lpproduction.jpeg";
import actcontemporary from "../assets/actcontemporary.png";
import artmodern from "../assets/artmodern.png";

const awardImages = [award1, award2, award3, award4, award5, award6, award7, award8, award9, award10, award11, award12];

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
      <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-3 sm:gap-x-10 md:gap-x-20 sm:gap-y-6 mb-8 py-4 max-w-3xl mx-auto items-center ml-1 sm:ml-0"
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
          {awardImages.map((img, i) => (
            <motion.div
              key={i}
              className="relative flex items-center justify-center w-full aspect-square bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-ethereal/30 hover:border-dreamy/80 transition-all duration-300 group overflow-hidden flex-shrink-0 md:w-48 md:h-48 md:aspect-auto"
              initial={{ opacity: 0, scale: 0.88, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.08, boxShadow: '0 0 32px 8px #a68cff55' }}
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
        </motion.div>
      {/* Press & Interviews Section (below awards) */}
      <PressLinksSection />
    </motion.div>
    {/* Partnerships Section */}
    <div className="w-full flex flex-col items-center mt-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-3xl font-bold text-ethereal text-center mb-0 tracking-wide drop-shadow-lg bg-gradient-to-r from-ethereal via-dreamy to-ethereal bg-clip-text text-transparent"
      >
        Partnerships
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-y-0 md:gap-x-16 w-full max-w-4xl mx-auto -mt-6">
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="transition-transform duration-300 ease-out hover:scale-105 active:scale-100"
        >
          <img src={lpproduction} alt="LP Production Sponsor" className="h-[36rem] md:h-[42rem] object-contain" />
        </motion.a>
        <motion.a
          href="https://arttmodernmiami.com/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="transition-transform duration-300 ease-out hover:scale-105 active:scale-100"
        >
          <img src={artmodern} alt="Art Modern Sponsor" className="h-[36rem] md:h-[42rem] object-contain" />
        </motion.a>
        <motion.a
          href="https://actcontemporary.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="transition-transform duration-300 ease-out hover:scale-105 active:scale-100"
        >
          <img src={actcontemporary} alt="Act Contemporary Sponsor" className="h-[36rem] md:h-[42rem] object-contain" />
        </motion.a>
        <motion.a
          href="https://redwoodartgroup.com/red-dot-miami/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="transition-transform duration-300 ease-out hover:scale-105 active:scale-100"
        >
          <img src={reddot} alt="Red Dot Sponsor" className="h-[36rem] md:h-[28rem] object-contain" />
        </motion.a>
      </div>
    </div>
  </section>
);

export default Awards;
