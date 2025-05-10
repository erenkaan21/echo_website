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
  { img: prisma, alt: "Prisma Awards", url: "https://www.romeprismafilmawards.com/july-2024-nominees/" },
];

const PressLinksSection = () => (
  <section className="w-full max-w-5xl mx-auto mt-10 mb-20">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-2xl md:text-3xl font-bold text-ethereal text-center mb-10 tracking-wide drop-shadow-lg"
    >
      Interview & Press
    </motion.h2>
    <div className="grid grid-cols-2 gap-3 w-full py-2 md:flex md:flex-row md:gap-8 md:justify-center md:items-center md:flex-nowrap md:overflow-visible">
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
          className="group"
        >
          <div className="w-full aspect-square flex items-center justify-center bg-white/90 rounded-xl shadow border border-ethereal/20 hover:border-dreamy/60 transition group-hover:scale-105 md:group-hover:shadow-xl p-0 m-0 md:w-32 md:h-32 md:aspect-auto">
            <img
              src={logo.img}
              alt={logo.alt}
              className="w-4/5 h-4/5 object-contain select-none pointer-events-none"
              draggable="false"
            />
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default PressLinksSection;
