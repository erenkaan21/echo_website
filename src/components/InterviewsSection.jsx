import React from "react";
import { motion } from "framer-motion";

const interviews = [
  {
    name: "Tuğba Yazıcı",
    role: "Producer",
    title: "Cannes Film Awards Interview",
    excerpt: "On being an inspiring woman of the year and the journey of Echo...",
    url: "https://cannesfilmawards.com/interviews/tuğba-yazici",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Livia Oya Proto",
    role: "Director, Screenwriter",
    title: "LA Film & Documentary Award",
    excerpt: "Exploring the creative process behind Echo and cross-cultural storytelling...",
    url: "https://bestfilmawards.com/spotlight-2/livia-oya-proto",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Tugba Yazici & Livia Oya Proto",
    role: "Producer & Director",
    title: "European Short Awards Interview",
    excerpt: "Collaboration, vision, and the making of a festival film...",
    url: "https://europeanshortawards.com/blog/interview-with-tugba-yazici-and-livia-oya-proto",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const InterviewsSection = () => (
  <section className="w-full max-w-5xl mx-auto mb-16">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-3xl md:text-4xl font-bold text-ethereal text-center mb-6 tracking-wide drop-shadow-lg"
    >
      <span className="inline-flex items-center gap-2">
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="inline-block text-dreamy"><path d="M16 4L20 12H28L22 18L24 26L16 21L8 26L10 18L4 12H12L16 4Z" fill="currentColor"/></svg>
        Interviews & Press
      </span>
    </motion.h2>
    <div className="flex gap-6 overflow-x-auto pb-2 px-1 scrollbar-hide">
      {interviews.map((iv, idx) => (
        <motion.div
          key={idx}
          className="min-w-[320px] max-w-xs bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-ethereal/40 hover:border-dreamy/80 transition-all duration-300 flex flex-col items-center p-6 mb-2 group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: idx * 0.1 }}
        >
          <img src={iv.img} alt={iv.name} className="w-20 h-20 rounded-full object-cover border-4 border-ethereal shadow-md mb-3"/>
          <div className="text-lg font-bold text-white mb-1">{iv.name}</div>
          <div className="text-xs text-dreamy mb-2 uppercase tracking-wide">{iv.role}</div>
          <div className="font-semibold text-base text-ethereal mb-2">{iv.title}</div>
          <div className="text-xs text-white/80 mb-3 text-center">{iv.excerpt}</div>
          <a href={iv.url} target="_blank" rel="noopener noreferrer" className="mt-auto px-4 py-1.5 rounded-lg bg-dreamy/80 text-white font-semibold shadow hover:bg-dreamy/100 transition">Read More</a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default InterviewsSection;
