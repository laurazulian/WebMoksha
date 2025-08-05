import React, { useEffect, useState } from 'react';
import './App.css';

const images = [
  '/Foto1.jpg',
  '/Foto2.jpg',
  '/Foto3.jpg',
];

const BackgroundSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // inicia fade-out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // inicia fade-in
      }, 500); // duración del fade
    }, 4000); // cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`slideshow-bg ${fade ? 'fade-in' : 'fade-out'}`}
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    ></div>
  );
};

export default BackgroundSlideshow;
