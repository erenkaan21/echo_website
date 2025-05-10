import React, { useState } from "react";

/**
 * BlurredImage renders a blurred placeholder until the real image is loaded.
 * @param {string} src - The image source
 * @param {string} alt - The alt text
 * @param {string} [className] - Optional additional classes
 * @param {string} [placeholder] - Optional low-res or blurred placeholder src
 */
const BlurredImage = ({ src, alt, className = "", placeholder }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: '3/4' }}>
      {placeholder && (
        <img
          src={placeholder}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover blur-lg scale-105 transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        draggable={false}
      />
    </div>
  );
};

export default BlurredImage;
