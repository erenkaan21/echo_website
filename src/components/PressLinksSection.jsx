import React from "react";
import { motion } from "framer-motion";
import artmodernmiami from "../assets/artmodernmiami.webp";
import bestfilmawards from "../assets/bestfilmawards.webp";
import cannasfilmawards from "../assets/cannasfilmawards.webp";
import europeanshortawards from "../assets/europeanshortawards.webp";
import NYIFA from "../assets/NYIFA.webp";
import prisma from "../assets/prisma.webp";

// List of logos and their corresponding URLs (order matches movie.press)
const pressLogos = [
  { img: cannasfilmawards, alt: "Cannes Film Awards", url: "https://cannesfilmawards.com/interviews/tuğba-yazici" },
  { img: bestfilmawards, alt: "Best Film Awards", url: "https://bestfilmawards.com/spotlight-2/livia-oya-proto" },
  { img: NYIFA, alt: "New York International Film Awards", url: "https://newyorkinternationalfilmawards.com/tugba-yazici/" },
  { img: europeanshortawards, alt: "European Short Awards", url: "https://europeanshortawards.com/blog/interview-with-tugba-yazici-and-livia-oya-proto" },
  { img: artmodernmiami, alt: "ArtModernMiami", url: "https://arttmodernmiami.com/3715/echo-pilot-episode-a-mysterious-adventure-begins-from-rome-to-miami/" },
  { img: prisma, alt: "Prisma Awards", url: "https://www.romeprismafilmawards.com/2025/03/21/an-interview-with-tugba-yazici-producer-of-echo/" },
];

const interviewQuotes = [
  { quote: "Art and artists serve as connectors.", owner: "Tuğba Yazıcı" },
  { quote: "I like mixing fantasy elements into reality.", owner: "Livia Oya Proto" },
  { quote: "No limit restricts me in the field of art!", owner: "Tuğba Yazıcı" },
  { quote: "Not necessity, but chance is full of magic.", owner: "Livia Oya Proto" },
  { quote: "The medallion lives on with its whispers and energy.", owner: "ArttModernMiami" },
  { quote: "Echo is a mirror held up to the soul of society.", owner: "Tuğba Yazıcı" },
];

const PressLinksSection = () => (
  <section className="w-full max-w-5xl mx-auto mt-10 mb-20">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-wide drop-shadow-lg bg-gradient-to-r from-ethereal via-dreamy to-ethereal bg-clip-text text-transparent"
    >
      Interview & Press
    </motion.h2>
    <div className="w-full mt-8">
      <div className="grid grid-cols-2 gap-y-6 gap-x-4 md:flex md:flex-row md:justify-center md:items-start md:gap-4 lg:gap-8">
        {pressLogos.map((logo, i) => (
          <motion.a
            key={i}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.09 }}
            className={
              `group flex flex-col items-center justify-start min-w-[120px] md:min-w-[140px] lg:min-w-[170px]` 
            }
            style={{ position: 'relative', zIndex: 20 }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center bg-white/90 rounded-xl shadow border border-ethereal/20 hover:border-dreamy/60 transition group-hover:scale-105 md:group-hover:shadow-xl">
              <img
                src={logo.img}
                alt={logo.alt}
                className="w-4/5 h-4/5 object-contain select-none pointer-events-none"
                draggable="false"
              />
            </div>
            {/* Interview quote below image */}
            <div className="mt-6 text-base md:text-lg text-dreamy/90 italic text-center px-2 md:px-2 font-serif max-w-xs min-h-[60px] flex items-center justify-center">
              “{interviewQuotes[i].quote}”
            </div>
            <div className="mt-2 text-xs md:text-sm text-ethereal/60 font-medium text-center">
              {interviewQuotes[i].owner}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default PressLinksSection;
