import React, { useState, useRef, useEffect } from "react";
import { movie } from "../data/movie";

import still2 from "../assets/still2.webp";
import bts1 from "../assets/bts1.webp";
import poster from "../assets/poster.webp";
import img1 from "../assets/1b89fa19-d220-49da-9511-b5ad8f02986a.jpeg.webp";
import img2 from "../assets/IMG_2268.jpeg.webp";
import img3 from "../assets/IMG_2282.jpeg.webp";
import img4 from "../assets/IMG_4886.jpeg.webp";
import img5 from "../assets/IMG_4887.jpeg.webp";
import img6 from "../assets/IMG_4894.jpeg.webp";
import img7 from "../assets/IMG_4907.jpeg.webp";
import img8 from "../assets/IMG_4911.webp";
import img9 from "../assets/IMG_5545.jpeg.webp";
import img10 from "../assets/Untitled_1.116.1.png.webp";
import img11 from "../assets/Untitled_1.125.1.png.webp";
import img12 from "../assets/Untitled_1.141.1.jpg.webp";
import img13 from "../assets/_E3A0489.jpeg.webp";
import img14 from "../assets/_E3A0511.jpeg.webp";
import img15 from "../assets/_E3A0513.jpeg.webp";
import img16 from "../assets/_E3A0518.jpeg.webp";
import img17 from "../assets/_E3A0527.jpeg adlı dosyanın kopyası.jpg";
//import img18 from "../assets/a9ff0153-b4b1-4d4d-be0e-326fd19c80ac.jpeg.webp";
import img19 from "../assets/ba713325-01e7-466d-b7c6-b7adaccc17b9.jpg.webp";
import img20 from "../assets/ba736156-de8e-41b7-9330-3e2b303499bb.jpg.webp";
import img21 from "../assets/fa2d578b-91db-4015-99a5-0ef133ec02c8.jpeg.webp";

const galleryImages = [
  poster,
  img17,img1,img2,img3, img4, img5, img6, img8, img9,img13, img14, img15, img16, img19, img20, img21, still2, bts1, img7,img10, img11, img12, 
];

import BlurredImage from "../components/BlurredImage";
import blurredPlaceholders from "../components/BlurredPlaceholderMap";
import styles from "./Gallery.module.css";

const IMAGES_PER_BATCH = 12;

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_BATCH);

  // "Daha Fazla Yükle" butonu için fonksiyon
  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + IMAGES_PER_BATCH, galleryImages.length)
    );
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    if (lightbox === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setLightbox((prev) => (prev + 1) % galleryImages.length);
      } else if (e.key === 'ArrowLeft') {
        setLightbox((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      } else if (e.key === 'Escape') {
        setLightbox(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 mt-16 overflow-hidden">
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
      <div className="w-full text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest text-white text-center mb-4 drop-shadow-[0_4px_32px_#a68cff99] bg-gradient-to-r from-ethereal via-dreamy to-ethereal bg-clip-text text-transparent">
          Gallery
        </h2>
        <div className="mx-auto mb-10 w-32 h-1 rounded-full bg-gradient-to-r from-dreamy/0 via-dreamy/80 to-dreamy/0 blur-[1.5px] opacity-80" />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-10 w-full px-4 md:px-12">
          {galleryImages.slice(0, visibleCount).map((src, i) => (
            <div
              key={i}
              className="relative cursor-pointer rounded-xl overflow-hidden shadow-dreamy border-2 border-transparent transition-transform duration-300 hover:scale-105"
              onClick={() => setLightbox(i)}
            >
              <BlurredImage
                src={src}
                alt={movie.gallery[i]?.alt || "Gallery image"}
                placeholder={blurredPlaceholders[i]}
                className="w-full aspect-square object-cover transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      {visibleCount < galleryImages.length && (
        <button
          onClick={handleLoadMore}
          className="mt-8 px-8 py-3 rounded-xl bg-ethereal text-navy font-bold text-lg shadow-lg hover:bg-dreamy transition"
        >
          Daha Fazla Yükle
        </button>
      )}
      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
        >
          {/* Left Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => (prev - 1 + galleryImages.length) % galleryImages.length); }}
            className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 bg-ethereal/80 hover:bg-ethereal text-navy rounded-full p-2 shadow-lg z-10 transition-all duration-200"
            style={{ fontSize: 32, opacity: 0.85 }}
            aria-label="Previous photo"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M21 28L11 16L21 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Right Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => (prev + 1) % galleryImages.length); }}
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 bg-ethereal/80 hover:bg-ethereal text-navy rounded-full p-2 shadow-lg z-10 transition-all duration-200"
            style={{ fontSize: 32, opacity: 0.85 }}
            aria-label="Next photo"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M11 28L21 16L11 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <img
            src={galleryImages[lightbox]}
            alt={movie.gallery[lightbox].alt}
            className={`max-h-[80vh] max-w-[90vw] rounded-xl shadow-dreamy border-4 border-ethereal ${styles["lightbox-zoom"]}`}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
