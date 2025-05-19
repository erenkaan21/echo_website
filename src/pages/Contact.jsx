import React from "react";
import { movie } from "../data/movie";
import { motion } from "framer-motion";
import poster from "../assets/poster.webp";

const Contact = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Blurred poster background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={poster}
          alt="Film Poster Background"
          className="object-cover w-full h-full"
          style={{ filter: "blur(8px) brightness(0.45) saturate(1.1)", opacity: 0.92 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181b2e88] via-[#181b2e44] to-[#2a1c3bEE]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl"
      >
        <div className="mt-8" />
        <motion.h2
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-2xl md:text-4xl font-extrabold uppercase tracking-widest text-white text-center mb-2 drop-shadow-[0_2px_16px_#a68cff99] bg-gradient-to-r from-ethereal via-dreamy to-ethereal bg-clip-text text-transparent"
        >
          Contact & Social Media
        </motion.h2>
        <div className="mx-auto mb-6 w-20 h-0.5 rounded-full bg-gradient-to-r from-dreamy/0 via-dreamy/80 to-dreamy/0 blur-[1.5px] opacity-80" />
        <div className="flex flex-col w-full items-center mt-10 mb-4">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl min-h-[220px] flex flex-col items-center justify-center bg-gradient-to-br from-[#181b2e]/90 to-[#2a1c3b]/90 backdrop-blur-xl shadow-2xl rounded-2xl border border-ethereal/30 px-2 py-6 md:py-8 md:px-4 xl:px-6 mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.88, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-xl md:text-2xl font-extrabold uppercase tracking-widest text-white text-center mb-1 drop-shadow-[0_2px_16px_#a68cff99] bg-gradient-to-r from-ethereal via-dreamy to-ethereal bg-clip-text text-transparent"
            >
              Contact Us
            </motion.h2>
            <p className="text-sm md:text-base text-ethereal/80 text-center mb-4 max-w-md">
              For press, collaboration, or questions, reach out via e-mail or Instagram!
            </p>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-3 w-full justify-center items-center mt-2">
              {/* Email Card */}
              <motion.a
                href="mailto:echoshortmovie2023@gmail.com"
                className="flex items-center gap-1 px-3 py-2 bg-white/90 hover:bg-ethereal/90 text-navy font-bold text-xs md:text-sm lg:text-base rounded-xl shadow-xl border-2 border-ethereal/30 hover:border-dreamy/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dreamy cursor-pointer select-none whitespace-nowrap min-w-[140px]"
                title="Send e-mail to Echo Short Movie"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
              >
                <i className="fas fa-envelope text-2xl text-dreamy" />
                echoshortmovie2023@gmail.com
              </motion.a>

              {/* Instagram Card */}
              <motion.a
                href="https://www.instagram.com/echo_pilotepisode/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-dreamy/90 to-ethereal/90 hover:from-ethereal/90 hover:to-dreamy/90 text-white font-bold text-xs md:text-sm lg:text-base rounded-xl shadow-xl border-2 border-ethereal/30 hover:border-dreamy/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dreamy cursor-pointer select-none whitespace-nowrap min-w-[140px]"
                title="Go to Instagram"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
              >
                <i className="fab fa-instagram text-2xl text-white" />
                @echo_pilotepisode
              </motion.a>
            </div>
          </motion.div>
          {/* Our Aim Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
            className="w-full max-w-xl min-h-[180px] flex flex-col items-center justify-center bg-gradient-to-br from-[#181b2e]/80 to-[#2a1c3b]/80 backdrop-blur-xl shadow-2xl rounded-2xl border border-ethereal/20 px-2 py-4 md:py-6 md:px-4 xl:px-6 mx-auto mt-6 compact-aim-card"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-3xl md:text-5xl text-dreamy/70 font-serif font-bold leading-none mb-1">“</span>
              <blockquote className="text-sm md:text-lg font-serif italic text-white text-center leading-relaxed mb-2 max-w-md drop-shadow-lg whitespace-pre-line">
                Echo is the beginning of our idea to expand it into a feature movie.
                The movie will present a different story and a different set of characters. The only element that will connect to Echo will be an ancient culture discovery and a different medallion/object. New heroes from other cultures and times will emerge and unite for the good of the world. In the feature movie, there will be a tough fight against those who want to abuse this power, but with the union of forces, goodness will win because the world and people need it. People need hope especially in this historical period that we are living.
              </blockquote>
              <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-dreamy/0 via-dreamy/60 to-dreamy/0 blur-[1.5px] mb-2 opacity-80" />
              <span className="self-end text-dreamy italic font-medium text-xs md:text-sm mt-1">— Echo Team</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <MekaFooter />
    </section>
  );
};

// --- MEKA DIGITALS FOOTER ---
import mekalogo from "../assets/mekalogo.png";

const instagramIcon = (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block align-middle text-dreamy group-hover:text-ethereal transition">
    <rect width="18" height="18" x="3" y="3" rx="5" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" strokeWidth="2"/>
    <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
  </svg>
);

function MekaFooter() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-14 mb-2">
      <div className="flex items-center gap-2 md:gap-3 px-4 py-2">
        <img src={mekalogo} alt="Meka Digitals Logo" width={144} height={144} className="rounded-full shadow-sm" />
        <span className="text-base md:text-lg text-ethereal/80 font-semibold ml-2 flex items-center gap-2">Built by Meka Digitals
  <a href="https://www.instagram.com/mekadigitals" target="_blank" rel="noopener noreferrer" className="ml-1 hover:text-dreamy hover:scale-110 transition-transform" style={{display:'inline-flex',verticalAlign:'middle'}}>{instagramIcon}</a>
</span>
      </div>
    </div>
  );
}

export default Contact;

