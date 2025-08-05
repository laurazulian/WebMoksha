import React, { useEffect, useState, useRef } from "react";
import './App.css';
const images = [
  "/Foto1.jpg",
  "/Foto2.jpg",
  "/Foto3.jpg",
];

export default function BackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [fadeInCurrent, setFadeInCurrent] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setFadeInCurrent(false); // fade out current

      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % images.length);
        setFadeInCurrent(true); // fade in next
      }, 1000); // duración del fade (igual que en CSS)
    }, 6000); // tiempo total por imagen

    return () => clearInterval(intervalRef.current);
  }, [nextIndex]);

  return (
    <div className="background-slideshow">
      <img
        src={images[currentIndex]}
        alt="background current"
        className={`slide ${fadeInCurrent ? "fade-in" : "fade-out"}`}
      />
      <img
        src={images[nextIndex]}
        alt="background next"
        className={`slide ${fadeInCurrent ? "fade-out" : "fade-in"}`}
      />
    </div>
  );
}
