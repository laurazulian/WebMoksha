import React, { useRef, useState } from "react";
import MokshaLanding from "./MokshaLanding";
import Portada from "./Portada";

export default function App() {
  const [mostrarLanding, setMostrarLanding] = useState(false);
  const [mostrarHero, setMostrarHero] = useState(true);
  const menuRef = useRef(null);

  const handleEnter = (idioma) => {
    // ❌ Eliminado localStorage.setItem(...)
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
    <MokshaLanding menuRef={menuRef} mostrarHero={mostrarHero} />
  ) : (
    <Portada onEnter={handleEnter} />
  );
}

