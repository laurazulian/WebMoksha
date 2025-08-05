import React, { useState, useEffect, useRef } from "react";
import MokshaLanding from "./MokshaLanding";
import Portada from "./Portada";

export default function App() {
  const [mostrarLanding, setMostrarLanding] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const yaEntró = localStorage.getItem("moksha-entró");
    if (yaEntró === "true") {
      setMostrarLanding(true);
    }
  }, []);

  const handleEnter = (idioma) => {
    localStorage.setItem("moksha-idioma", idioma);
    localStorage.setItem("moksha-entró", "true");
    setMostrarLanding(true);

    // Esperar a que MokshaLanding se monte
    setTimeout(() => {
      if (menuRef.current) {
        menuRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // espera que el DOM se monte (ajustable)
  };

  return mostrarLanding ? (
    <MokshaLanding menuRef={menuRef} />
  ) : (
    <Portada onEnter={handleEnter} />
  );
}
