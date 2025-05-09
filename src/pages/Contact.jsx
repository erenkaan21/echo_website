import React from "react";
import { movie } from "../data/movie";
import { motion } from "framer-motion";
import poster from "../assets/poster.jpeg";

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
        <div className="mt-20" />
        <motion.h2
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest text-white text-center mb-4 drop-shadow-[0_4px_32px_#a68cff99] bg-gradient-to-r from-ethereal via-dreamy to-ethereal bg-clip-text text-transparent"
        >
          Contact & Social Media
        </motion.h2>
        <div className="mx-auto mb-10 w-32 h-1 rounded-full bg-gradient-to-r from-dreamy/0 via-dreamy/80 to-dreamy/0 blur-[1.5px] opacity-80" />
        <div className="flex flex-col w-full items-center mt-20 mb-10">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-3xl min-h-[340px] flex flex-col items-center justify-center bg-gradient-to-br from-[#181b2e]/90 to-[#2a1c3b]/90 backdrop-blur-xl shadow-2xl rounded-2xl border border-ethereal/30 px-4 py-14 md:py-16 md:px-10 xl:px-16 mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.88, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-white text-center mb-2 drop-shadow-[0_4px_32px_#a68cff99] bg-gradient-to-r from-ethereal via-dreamy to-ethereal bg-clip-text text-transparent"
            >
              Contact Us
            </motion.h2>
            <p className="text-lg md:text-xl text-ethereal/80 text-center mb-8 max-w-xl">
              For press, collaboration, or questions, reach out via e-mail or Instagram!
            </p>
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center mt-6">
              {/* Email Card */}
              <motion.a
                href="mailto:info@echopilot.com"
                className="flex items-center gap-3 px-10 py-5 bg-white/90 hover:bg-ethereal/90 text-navy font-bold text-lg md:text-xl rounded-xl shadow-xl border-2 border-ethereal/30 hover:border-dreamy/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dreamy cursor-pointer select-none whitespace-nowrap min-w-[260px] md:min-w-[320px]"
                title="Send e-mail"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
              >
                <i className="fas fa-envelope text-2xl text-dreamy" />
                info@echopilot.com
              </motion.a>
              {/* Instagram Card */}
              <motion.a
                href="https://www.instagram.com/echo_pilotepisode/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-dreamy/90 to-ethereal/90 hover:from-ethereal/90 hover:to-dreamy/90 text-white font-bold text-lg md:text-xl rounded-xl shadow-xl border-2 border-ethereal/30 hover:border-dreamy/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dreamy cursor-pointer select-none whitespace-nowrap min-w-[260px] md:min-w-[320px]"
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
            className="w-full max-w-3xl min-h-[340px] flex flex-col items-center justify-center bg-gradient-to-br from-[#181b2e]/80 to-[#2a1c3b]/80 backdrop-blur-xl shadow-2xl rounded-2xl border border-ethereal/20 px-4 py-10 md:py-12 md:px-10 xl:px-16 mx-auto mt-12 compact-aim-card"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-5xl md:text-7xl text-dreamy/70 font-serif font-bold leading-none mb-2">“</span>
              <blockquote className="text-lg md:text-2xl font-serif italic text-white text-center leading-relaxed mb-4 max-w-xl drop-shadow-lg whitespace-pre-line">
                Echo is the beginning of our idea to expand it into a feature movie.
                The movie will present a different story and a different set of characters. The only element that will connect to Echo will be an ancient culture discovery and a different medallion/object. New heroes from other cultures and times will emerge and unite for the good of the world. In the feature movie, there will be a tough fight against those who want to abuse this power, but with the union of forces, goodness will win because the world and people need it. People need hope especially in this historical period that we are living.
              </blockquote>
              <div className="w-24 h-1 rounded-full bg-gradient-to-r from-dreamy/0 via-dreamy/60 to-dreamy/0 blur-[1.5px] mb-4 opacity-80" />
              <span className="self-end text-dreamy italic font-medium text-base md:text-lg mt-2">— Echo Team</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
