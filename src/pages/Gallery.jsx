import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { movie } from "../data/movie";

import still2 from "../assets/still2.webp";
import bts1 from "../assets/bts1.webp";
import poster from "../assets/poster.webp";
import img1 from "../assets/1b89fa19-d220-49da-9511-b5ad8f02986a.jpeg.webp";
import img1_thumb from "../assets/thumbs/1b89fa19-d220-49da-9511-b5ad8f02986a.jpeg.webp";
import img2 from "../assets/IMG_2268.jpeg.webp";
import img2_thumb from "../assets/thumbs/IMG_2268.jpeg.webp";
import img3 from "../assets/IMG_2282.jpeg.webp";
import img3_thumb from "../assets/thumbs/IMG_2282.jpeg.webp";
import img4 from "../assets/IMG_4886.jpeg.webp";
import img4_thumb from "../assets/thumbs/IMG_4886.jpeg.webp";
import img5 from "../assets/IMG_4887.jpeg.webp";
import img5_thumb from "../assets/thumbs/IMG_4887.jpeg.webp";
import img6 from "../assets/IMG_4894.jpeg.webp";
import img6_thumb from "../assets/thumbs/IMG_4894.jpeg.webp";
import img7 from "../assets/IMG_4907.jpeg.webp";
import img7_thumb from "../assets/thumbs/IMG_4907.jpeg.webp";
import img8 from "../assets/IMG_4911.webp";
import img8_thumb from "../assets/thumbs/IMG_4911.webp";
import img9 from "../assets/IMG_5545.jpeg.webp";
import img9_thumb from "../assets/thumbs/IMG_5545.jpeg.webp";
import img10 from "../assets/Untitled_1.116.1.png.webp";
import img10_thumb from "../assets/thumbs/Untitled_1.116.1.png.webp";
import img11 from "../assets/Untitled_1.125.1.png.webp";
import img11_thumb from "../assets/thumbs/Untitled_1.125.1.png.webp";
import img12 from "../assets/Untitled_1.141.1.jpg.webp";
import img12_thumb from "../assets/thumbs/Untitled_1.141.1.jpg.webp";
import img13 from "../assets/_E3A0489.jpeg.webp";
import img13_thumb from "../assets/thumbs/_E3A0489.jpeg.webp";
import img14 from "../assets/_E3A0511.jpeg.webp";
import img14_thumb from "../assets/thumbs/_E3A0511.jpeg.webp";
import img15 from "../assets/_E3A0513.jpeg.webp";
import img15_thumb from "../assets/thumbs/_E3A0513.jpeg.webp";
import img16 from "../assets/_E3A0518.jpeg.webp";
import img16_thumb from "../assets/thumbs/_E3A0518.jpeg.webp";
import img19 from "../assets/ba713325-01e7-466d-b7c6-b7adaccc17b9.jpg.webp";
import img19_thumb from "../assets/thumbs/ba713325-01e7-466d-b7c6-b7adaccc17b9.jpg.webp";
import img20 from "../assets/ba736156-de8e-41b7-9330-3e2b303499bb.jpg.webp";
import img20_thumb from "../assets/thumbs/ba736156-de8e-41b7-9330-3e2b303499bb.jpg.webp";
import img21 from "../assets/fa2d578b-91db-4015-99a5-0ef133ec02c8.jpeg.webp";
import img21_thumb from "../assets/thumbs/fa2d578b-91db-4015-99a5-0ef133ec02c8.jpeg.webp";
import still2_thumb from "../assets/thumbs/still2.webp";
import bts1_thumb from "../assets/thumbs/bts1.webp";
import poster_thumb from "../assets/thumbs/poster.webp";
import img29 from "../assets/img29.webp";
import photoo1 from "../assets/photoo (1).jpeg";
import photoo2 from "../assets/photoo (2).jpeg";
import photoo3 from "../assets/photoo (3).jpeg";
import photoo4 from "../assets/photoo (4).jpeg";
import foto2 from "../assets/foto (2).webp";
import foto2_thumb from "../assets/thumbs/foto (2).webp";
import foto3 from "../assets/foto (3).webp";
import foto3_thumb from "../assets/thumbs/foto (3).webp";
import foto5 from "../assets/foto (5).webp";
import foto5_thumb from "../assets/thumbs/foto (5).webp";
import foto8 from "../assets/foto (8).webp";
import foto8_thumb from "../assets/thumbs/foto (8).webp";
import foto9 from "../assets/foto (9).webp";
import foto9_thumb from "../assets/thumbs/foto (9).webp";
import foto11 from "../assets/foto (11).webp";
import foto11_thumb from "../assets/thumbs/foto (11).webp";
import foto12 from "../assets/foto (12).webp";
import foto12_thumb from "../assets/thumbs/foto (12).webp";
import foto22 from "../assets/foto (22).webp";
import foto22_thumb from "../assets/thumbs/foto (22).webp";
import foto23 from "../assets/foto (23).webp";
import foto23_thumb from "../assets/thumbs/foto (23).webp";
import foto24 from "../assets/foto (24).webp";
import foto24_thumb from "../assets/thumbs/foto (24).webp";
import foto25 from "../assets/foto (25).webp";
import foto25_thumb from "../assets/thumbs/foto (25).webp";
import foto26 from "../assets/foto (26).webp";
import foto26_thumb from "../assets/thumbs/foto (26).webp";
import foto27 from "../assets/foto (27).webp";
import foto27_thumb from "../assets/thumbs/foto (27).webp";
import foto28 from "../assets/foto (28).webp";
import foto28_thumb from "../assets/thumbs/foto (28).webp";
import foto29 from "../assets/foto (29).webp";
import foto29_thumb from "../assets/thumbs/foto (29).webp";

const galleryImages = [
  { full: poster, thumb: poster_thumb },
  { full: img29, thumb: img29 },
  { full: img1, thumb: img1_thumb },
  // ... (other existing images)
  // Add all 'foto' images at the end in order
  { full: foto2, thumb: foto2_thumb },
  { full: foto3, thumb: foto3_thumb },
  { full: foto5, thumb: foto5_thumb },
  { full: foto8, thumb: foto8_thumb },
  { full: foto9, thumb: foto9_thumb },
  { full: foto11, thumb: foto11_thumb },
  { full: foto12, thumb: foto12_thumb },
  { full: foto22, thumb: foto22_thumb },
  { full: foto23, thumb: foto23_thumb },
  { full: foto24, thumb: foto24_thumb },
  { full: foto25, thumb: foto25_thumb },
  { full: foto26, thumb: foto26_thumb },
  { full: foto27, thumb: foto27_thumb },
  { full: foto28, thumb: foto28_thumb },
  { full: foto29, thumb: foto29_thumb },
  { full: img2, thumb: img2_thumb },
  { full: img3, thumb: img3_thumb },
  { full: img4, thumb: img4_thumb },
  { full: img5, thumb: img5_thumb },
  { full: img6, thumb: img6_thumb },
  { full: img8, thumb: img8_thumb },
  { full: img9, thumb: img9_thumb },
  { full: img13, thumb: img13_thumb },
  { full: img14, thumb: img14_thumb },
  { full: img15, thumb: img15_thumb },
  { full: img16, thumb: img16_thumb },
  { full: img19, thumb: img19_thumb },
  { full: img20, thumb: img20_thumb },
  { full: img21, thumb: img21_thumb },
  { full: still2, thumb: still2_thumb },
  { full: bts1, thumb: bts1_thumb },
  { full: img7, thumb: img7_thumb },
  { full: img10, thumb: img10_thumb },
  { full: img11, thumb: img11_thumb },
  { full: img12, thumb: img12_thumb },
  { full: photoo1, alt: "Gallery photo" },
  { full: photoo2, alt: "Gallery photo" },
  { full: photoo3, alt: "Gallery photo" },
  { full: photoo4, alt: "Gallery photo" },
];

import BlurredImage from "../components/BlurredImage";
import blurredPlaceholders from "../components/BlurredPlaceholderMap";
import styles from "./Gallery.module.css";

const IMAGES_PER_BATCH = 12;

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_BATCH);

  // 'Load More' button function
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
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 mt-8 overflow-hidden"
      >
      <div className="w-full text-center">
        <motion.h2
  initial={{ opacity: 0, scale: 0.88, y: 40 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="text-2xl md:text-4xl font-extrabold uppercase tracking-widest text-white text-center mb-2 drop-shadow-[0_2px_16px_#a68cff99] bg-gradient-to-r from-ethereal via-dreamy to-ethereal bg-clip-text text-transparent"
>
  Gallery
</motion.h2>
        <div className="mx-auto mb-10 w-32 h-1 rounded-full bg-gradient-to-r from-dreamy/0 via-dreamy/80 to-dreamy/0 blur-[1.5px] opacity-80" />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-10 w-full px-4 md:px-12">
          {galleryImages.slice(0, visibleCount).map((img, i) => (
              <motion.div
                key={i}
                className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.06, boxShadow: '0 8px 32px #a68cff55, 0 0 32px 8px #a68cff22', zIndex: 2 }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                onClick={() => setLightbox(i)}
              >
                <BlurredImage
                  src={img.thumb || img.full}
                  alt={`Gallery image ${i + 1}`}
                  placeholder={blurredPlaceholders[i]}
                  className="object-cover w-full h-full"
                />
                {/* Modern colored overlay on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-lg"
                  initial={{ background: 'linear-gradient(to top, #181b2eb0 0%, transparent 100%)', opacity: 0.25 }}
                  whileHover={{ background: 'linear-gradient(120deg, #a68cff33 0%, #181b2e88 100%)', opacity: 0.42 }}
                  transition={{ duration: 0.32 }}
                />
              </motion.div>
            ))}
        </div>
      </div>
      {visibleCount < galleryImages.length && (
        <button
          onClick={handleLoadMore}
          className="mt-8 px-8 py-3 rounded-xl bg-ethereal text-navy font-bold text-lg shadow-lg hover:bg-dreamy transition"
        >
          Load More
        </button>
      )}
      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={() => setLightbox(null)}>
          <img src={galleryImages[lightbox].full} alt="Large" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl" />
          {/* Right Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => (prev + 1) % galleryImages.length); }}
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 bg-ethereal/80 hover:bg-ethereal text-navy rounded-full p-2 shadow-lg z-10 transition-all duration-200"
            style={{ fontSize: 32, opacity: 0.85 }}
          >
            &#8594;
          </button>
          {/* Left Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => (prev - 1 + galleryImages.length) % galleryImages.length); }}
            className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 bg-ethereal/80 hover:bg-ethereal text-navy rounded-full p-2 shadow-lg z-10 transition-all duration-200"
            style={{ fontSize: 32, opacity: 0.85 }}
          >
            &#8592;
          </button>
        </div>
      )}
    </motion.section>
    </>
  );
};

export default Gallery;
