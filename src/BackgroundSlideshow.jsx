import React, { useEffect, useState } from 'react';
import './App.css'; // Para estilos opcionales

const images = [
  '/Foto1.jpg',
  '/Foto2.jpg',
  '/Foto3.jpg',
];

const BackgroundSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 6000); // Cambiar cada 6 segundos

    return () => clearInterval(interval); // Limpieza al desmontar
  }, []);

  return (
    <div
      className="slideshow-bg"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    ></div>
  );
};

export default BackgroundSlideshow;
