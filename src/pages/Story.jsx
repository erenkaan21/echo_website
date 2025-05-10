import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { storylineSlides } from "../data/storyline";
import poster from "../assets/poster.webp";

const AUTO_ADVANCE_SEC = 8;

const Story = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideCount = storylineSlides.length;
  const intervalRef = useRef();

  // Auto-advance logic
  useEffect(() => {
    setProgress(0);
    intervalRef.current && clearInterval(intervalRef.current);
    let frame;
    let start = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - start) / 1000;
      if (elapsed >= AUTO_ADVANCE_SEC) {
        setCurrent((c) => (c + 1) % slideCount);
        setProgress(0);
        return;
      }
      setProgress(elapsed / AUTO_ADVANCE_SEC);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [current, slideCount]);

  // Manual navigation resets progress
  const goTo = (idx) => {
    setCurrent(idx);
    setProgress(0);
  };
  const nextSlide = () => goTo((current + 1) % slideCount);
  const prevSlide = () => goTo((current - 1 + slideCount) % slideCount);

  return (
    <section id="story-section" className="w-screen h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Blurred poster background during transitions */}
        <motion.div
          key={"transition-bg" + current}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{ willChange: 'opacity' }}
        >
          <img
            src={poster}
            alt="Poster Background"
            className="object-cover w-full h-full"
            style={{ filter: "blur(8px) brightness(0.45) saturate(1.1)", opacity: 0.92 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#181b2e88] via-[#181b2e44] to-[#2a1c3bEE]" />
        </motion.div>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.img
            src={storylineSlides[current].image.replace(/(jpg|jpeg|png)$/, 'webp')}
            alt={storylineSlides[current].title}
            className="w-full h-full object-cover object-center absolute inset-0"
            style={{ zIndex: 1, filter: 'brightness(0.7) saturate(1.08)' }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.07 }}
            transition={{ duration: AUTO_ADVANCE_SEC, ease: 'easeInOut' }}
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
          {/* Animated text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-center px-4 md:px-0 pb-12 md:pb-0 z-20 select-none pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={storylineSlides[current].title + '-textbox'}
                initial={{ opacity: 0, y: 60, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="rounded-xl px-1 md:px-2 py-1 md:py-2 flex flex-col items-center max-w-2xl mx-auto"
                style={{ pointerEvents: 'auto', background: 'none' }}
              >
                <motion.h2
                  className="text-3xl md:text-5xl font-serif font-light md:font-normal mb-2 text-white drop-shadow-2xl text-center tracking-wide italic max-w-md mx-auto whitespace-normal"
                  style={{ fontFamily: `'Playfair Display', Georgia, 'Times New Roman', serif` }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  {storylineSlides[current].title}
                </motion.h2>
                <motion.p
                  className="text-xs md:text-sm font-serif text-white/90 drop-shadow max-w-2xl text-center tracking-wide"
                  style={{ fontFamily: `'Georgia', 'Times New Roman', serif` }}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.8, delay: 0.12, ease: "easeInOut" }}
                >
                  {current === 0
  ? storylineSlides[0].text.replace(/^.*?[.!?]\s+/, '')
  : storylineSlides[current].text}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Controls & Progress bar */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center z-30">
        {/* Progress bar */}
        <div className="w-full h-1 bg-ethereal/20">
          <motion.div
            className="h-1 bg-ethereal"
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.2, ease: "linear" }}
          />
        </div>
        {/* Navigation */}
        <div className="flex items-center justify-center w-full mt-6 gap-6 mb-8">
          <button
            onClick={prevSlide}
            className="text-3xl text-ethereal/80 hover:text-ethereal transition px-4 py-2 rounded-full bg-dreamy/10 hover:bg-dreamy/30 shadow"
            aria-label="Previous slide"
          >
            &#8592;
          </button>
          <div className="flex gap-3">
            {storylineSlides.map((_, idx) => (
              <button
                key={idx}
                className={`w-4 h-4 rounded-full border-2 border-ethereal/40 transition-all duration-300 ${idx === current ? "bg-ethereal" : "bg-ethereal/20"}`}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="text-3xl text-ethereal/80 hover:text-ethereal transition px-4 py-2 rounded-full bg-dreamy/10 hover:bg-dreamy/30 shadow"
            aria-label="Next slide"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Story;
