import React, { useState, useEffect } from "react";
import MokshaLanding from "./MokshaLanding";
import Portada from "./Portada";

export default function App() {
  const [mostrarLanding, setMostrarLanding] = useState(false);

  useEffect(() => {
    const yaEntró = localStorage.getItem("moksha-entró");
    if (yaEntró === "true") {
      setMostrarLanding(true);
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem("moksha-entró", "true");
    setMostrarLanding(true);
  };

  return (
    <>
      {mostrarLanding ? (
        <MokshaLanding />
      ) : (
        <Portada onEnter={handleEnter} />
      )}
    </>
  );
}
