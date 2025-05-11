import React, { useState } from "react";
import { movie } from "../data/movie";
import { motion } from "framer-motion";
import directorPhoto from "../assets/director.webp";
import still1 from "../assets/still1.webp";
import poster from "../assets/poster.webp";

import screenwriterPhoto from "../assets/screenwriter.webp";
import leadactressPhoto from "../assets/leadactress.webp";
import story1Photo from "../assets/story1.webp";
import ryanPhoto from "../assets/a9ff0153-b4b1-4d4d-be0e-326fd19c80ac.webp";
import michaelPhoto from "../assets/michael.webp";
import instagramLogo from "../assets/insta1.webp";

const placeholder = "https://placehold.co/240x320/png?text=Photo";
const placeholderBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.";
const placeholderLinks = [
  { label: "IMDB", url: "https://imdb.com" },
  { label: "Festival", url: "https://filmfreeway.com" }
];
const placeholderSocial = [
  { icon: "fab fa-instagram", url: "https://instagram.com" },
  { icon: "fab fa-x-twitter", url: "https://twitter.com" }
];

const Card = ({ name, role, photo, bio, expanded, onClick, index = 0, social = [] }) => {
  // Extract location (first line before \n) and rest as bio
  let location = "";
  let restBio = "";
  if (bio && bio.includes("\n")) {
    [location, ...restBio] = bio.split("\n");
    restBio = restBio.join("\n");
  } else {
    location = "";
    restBio = bio || "";
  }
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, flex: 1, minWidth: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: index * 0.07
      }}
      whileHover={{
        scale: 1.07,
        boxShadow: "0 8px 32px 0 #a68cff44, 0 0 32px 8px #a68cff22",
        filter: "brightness(1.08)",
        zIndex: 20
      }}
      className={`relative w-[110px] h-[360px] md:w-[120px] md:h-[420px] flex flex-col items-center cursor-pointer overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-[#181b2e] to-[#2a1c3b] group z-10 transition-all duration-300`}
      onClick={onClick}
    >
      {/* Location and Name at the top */}
      <div className="absolute top-0 left-0 w-full flex flex-col items-center z-20 pointer-events-none mt-2">
        {location && <span className="text-xs md:text-sm font-semibold text-dreamy drop-shadow bg-[#181b2e99] px-2 py-1 rounded-t-xl mb-1">{location}</span>}
        <span className="text-base md:text-lg font-bold text-white drop-shadow bg-[#181b2e99] px-2 py-0.5 rounded-xl mb-1">{name}</span>
        <span className="uppercase tracking-wider text-[10px] md:text-[11px] text-white bg-[#181b2e99] px-1.5 py-0.5 rounded mb-1">{role}</span>
      </div>
      <motion.img
        src={photo}
        alt={name}
        className="object-cover w-full h-full transition-all duration-500 border-2 border-ethereal/30 rounded-xl"
        style={{ zIndex: 1 }}
        whileHover={{ scale: 1.08, filter: "brightness(1.13)" }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      />
      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        whileHover={{ background: "linear-gradient(120deg, #a68cff33 0%, #181b2e88 100%)" }}
        transition={{ duration: 0.3 }}
      />
      {/* Expanded overlay with text */}
      {expanded && (
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center bg-black/80 rounded-xl p-6 z-30"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
        >
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-white text-[9px] md:text-[11px] mb-2 text-center whitespace-pre-line min-h-[32px]">{restBio}</p>
            {Array.isArray(social) && social[0] && social[0].url && (
              <a
                href={social[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center p-0 rounded-lg transition-all duration-200"
                style={{ width: 56, height: 56, background: 'transparent', border: 'none', boxShadow: 'none' }}
              >
                <img src={instagramLogo} alt="Instagram" width={56} height={56} className="block opacity-70 hover:opacity-100 transition-opacity" />
              </a>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const AccordionPanel = ({ bio, links, social, onClose }) => (
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: '220px', opacity: 1 }}
    exit={{ width: 0, opacity: 0 }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    className="h-full flex flex-col justify-center px-3 py-4 bg-gradient-to-br from-[#181b2e]/95 to-[#2a1c3b]/95 rounded-xl z-30 shadow-2xl relative"
    style={{ minWidth: 0 }}
  >
    <button onClick={onClose} className="absolute top-2 right-2 text-xs px-2 py-1 bg-dreamy/30 text-ethereal rounded hover:bg-dreamy/60">Close</button>
    <p className="text-accent text-xs mb-2 text-center whitespace-pre-line min-h-[28px]">{bio}</p>
    <div className="flex flex-wrap gap-1 mb-1 justify-center">
      {links.map((l, idx) => (
        <a key={idx} href={l.url} target="_blank" rel="noopener noreferrer" className="text-xs px-1.5 py-0.5 bg-ethereal/10 text-ethereal rounded hover:bg-ethereal/20 transition">{l.label}</a>
      ))}
    </div>
    <div className="flex gap-2 mt-2 justify-center">
      {social.map((s, idx) => (
        <a
          key={idx}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-0 rounded-lg transition-all duration-200"
          style={{ width: 36, height: 36, background: 'transparent', border: 'none', boxShadow: 'none' }}
        >
          <img src={instagramLogo} alt="Instagram" width={36} height={36} className="block opacity-70 hover:opacity-100 transition-opacity" />
        </a>
      ))}
    </div>
  </motion.div>
);

// (No duplicate React import here)

const CastCrew = () => {
  // Two rows of 4 columns (8 cards)
  const rows = [
    [
      {
        name: "Livia Oya Proto",
        role: "Director, Screenwriter",
        photo: directorPhoto,
        bio: `Rome, Italy\nLivia Oya Proto is a director and screenwriter graduated from Rufa (Rome University Of Fine Arts). She is half Italian and half Turkish and lives in Rome, Italy. Her most recent work as a director, screenwriter is the pilot episode “Echo” which is selected as a monthly pick of July in Prisma \"Rome Independent Film Awards\", St.Auggie shorts film festival.\nAs a screenwriter with her new Anthological tv series \"ephemeral\" was selected as a finalist in the third edition of Z-PITCH created in collaboration with the Rome Film Fest, Naba, Civica Scuola di Cinema Luchino Visconti and to the Social World Impact Film festival in Vico Equense, Italy to present it as a pitch.`,
        links: [],
        social: [
          { icon: "fab fa-instagram", url: "https://www.instagram.com/livia.proto/" }
        ]
      },
      {
        name: "Melda Sherman",
        role: "Screenwriter",
        photo: screenwriterPhoto,
        bio: `Boston, MA.\nMelda Sherman was born on June 15, 1975, in Izmir, Turkey. Her family inspired in her a love of learning that led her to creating artistic works, so she studied art at university. She took advantage of these opportunities to see behind the scenes so she wrote her first book, Everything Will Be Fine, in Turkish as Her şey çok güzel olacak, in 2016. By studying art, she built an understanding of the history of art, and she had poems published in Boston with other thirty poets. Her poems are “Pandora’s Box” and “Little Mermaid.” She also has interest in sculptures and creating her own style. Melda’s artwork has been shown in exhibitions in the United States and different countries. Throughout her life, Melda has always been fascinated by images and how the world is represented through the eyes of others, so she was drawn to photography also. Her book entitled “Migratory Birds” has been published by Hollywood 5M production company.`,
        links: [],
        social: [
          { icon: "fab fa-instagram", url: "https://www.instagram.com/melssherman/" }
        ]
      },
      {
        name: "Tuğba Yazıcı",
        role: "Producer",
        photo: still1,
        bio: `Florida, FL, USA\nTuğba Yazıcı was born in Istanbul. After studying at the Faculty of Fine Arts Painting Department, she received \"Fashion Design\" education at the Istanbul Fashion Academy between 2012-2014. Besides the paintings she produced and the exhibitions she organized, she created her brand in 2014. She adapted her paintings from canvas and adapted them to her designs and created a brand as \"Tugba Yazıcı\".\nThrough the \"Portable Art\" concept, the artist combines her paintings with fashion; today, it is carried around the world in colorful, bold, and different designs. Their designs are worn in many countries of the world. She also continues her painting studies and participates in international exhibitions such as Spectrum Miami Art Fair. The artist lives in Florida.`,
        links: [],
        social: [
          { icon: "fab fa-instagram", url: "https://www.instagram.com/tugbayaziciofficial/" }
        ]
      },
    ],
    [
      {
        name: "Michael Gabriel",
        role: "Lead Actor",
        photo: michaelPhoto,
        bio: `Miami, FL, USA\nMichael Gabriel, is an actor starring in Abduction Chronicles on Amazon Prime, The April 16th Collateral Interest cartel series which will be released on Prime.`,
        links: [],
        social: []
      },
      {
        name: "Zeynep Hande Yazici",
        role: "Lead Actress",
        photo: leadactressPhoto,
        bio: `Florida, FL, USA\nShe was born on September 20, 2001 in Istanbul. She studies psychology and is fluent in English and Turkish. She played in Istanbul Duru Theater in 2015-2016. Between 2016-2017 played in school theater at Amherst Regional High School, MA, USA. In 2018, she participated in the Berlin Art Festival (ISTA) workshop. In the 2021 she played the role of Farah in the Serbulent Apartment short film.`,
        links: [],
        social: [
          { icon: "fab fa-instagram", url: "https://www.instagram.com/p/CZMr16gD_l8/" }
        ]
      },
      {
        name: "Ryan Buck Thomas",
        role: "Supporting Actor",
        photo: ryanPhoto,
        bio: `St. Augustine, Florida, USA\nRyan Buck Thomas is a native Amerian actor that has played the role of a shaman in the Echo pilot Episode. He has starred in the movie \"The Adobe\" available in Amazon Prime..`,
        links: [],
        social: [
          { icon: "fab fa-instagram", url: "https://www.instagram.com/ryan_buck_thomas" }
        ]
      }
    ],
  ];
  const [expanded, setExpanded] = useState([null, null]); // per row

  return (
    <>
      {/* Blurred poster background - static, outside animation */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <img
          src={poster}
          alt="Film Poster Background"
          className="object-cover w-full h-full"
          style={{ filter: "blur(8px) brightness(0.45) saturate(1.1)", opacity: 0.92 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181b2e88] via-[#181b2e44] to-[#2a1c3bEE]" />
      </div>
      <section className="min-h-screen flex flex-col items-center justify-center px-8 md:px-32 py-14 mt-12">
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-screen max-w-none m-0 p-0"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-2xl md:text-4xl font-extrabold uppercase tracking-widest text-white text-center mb-2 drop-shadow-[0_2px_16px_#a68cff99] bg-gradient-to-r from-ethereal via-dreamy to-ethereal bg-clip-text text-transparent"
        >
          Cast & Crew
        </motion.h2>
        <div className="mx-auto mb-10 w-32 h-1 rounded-full bg-gradient-to-r from-dreamy/0 via-dreamy/80 to-dreamy/0 blur-[1.5px] opacity-80" />
        <div className="flex flex-col gap-6 mt-8 w-full max-w-5xl mx-auto">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-6 gap-x-2 md:gap-x-6 mb-8 w-full px-2 md:px-6 justify-center" style={{height:'min-content'}}>
              {row.map((person, idx) => {
                // Add left margin to first card, right margin to last card
                let extraMargin = "";
                // For the first card of the second row, reduce the top margin on mobile
                let customClass = "flex-1 min-w-0 flex items-stretch";
                
                return (
                  <div key={idx} className={customClass}>
                    <Card
                      {...person}
                      expanded={expanded[rowIdx] === idx}
                      onClick={() => setExpanded(expanded.map((v, i) => i === rowIdx ? (v === idx ? null : idx) : v))}
                      index={idx}
                      social={person.social}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
    </>
  );
};

export default CastCrew;
