import React, { useRef, useState, useEffect } from "react";
import MokshaLanding from "./MokshaLanding";
import Portada from "./Portada";

export default function App() {
  const [mostrarLanding, setMostrarLanding] = useState(false);
  const [mostrarHero, setMostrarHero] = useState(true);
  const menuRef = useRef(null);
  const mapaRef = useRef(null);

  useEffect(() => {
    // Manejar el evento de navegación hacia atrás
    const handlePopState = (event) => {
      if (event.state && event.state.view === 'portada') {
        // Volver a la portada
        setMostrarLanding(false);
        setMostrarHero(true);
      } else if (!event.state && mostrarLanding) {
        // Si no hay estado y estamos en el landing, volver a portada
        setMostrarLanding(false);
        setMostrarHero(true);
      }
    };

    // Agregar el listener
    window.addEventListener('popstate', handlePopState);

    // Limpiar el listener al desmontar
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [mostrarLanding]);

  const handleEnter = (idioma) => {
    // Agregar la portada al historial antes de ir al menú
    window.history.pushState({ view: 'portada' }, '', window.location.href);
    
    setMostrarHero(false);
    setMostrarLanding(true);
    
    // Hacer scroll al menú una vez montado
    setTimeout(() => {
      if (menuRef.current) {
        menuRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return mostrarLanding ? (
    <MokshaLanding
      menuRef={menuRef}
      mapaRef={mapaRef}
      mostrarHero={mostrarHero}
    />
  ) : (
    <Portada onEnter={handleEnter} mapaRef={mapaRef} />
  );
}