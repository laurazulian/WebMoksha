import React, { useState, useEffect } from 'react';

export default function Portada({ onEnter, mapaRef }) {
  const [showMapPopup, setShowMapPopup] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Activa el efecto fade-in al montar el componente
    setFadeIn(true);
  }, []);

  const scrollToMapa = () => {
    if (mapaRef && mapaRef.current) {
      mapaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMapPopup = () => setShowMapPopup(true);
  const closeMapPopup = () => setShowMapPopup(false);

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-opacity duration-1000 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Contenedor del fondo animado */}
      {/* <div className="absolute inset-0 animated-bg -z-10"></div> */}

      {/* Contenido principal de la portada */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-white text-center px-6">
        <div className="bg-black/60 p-8 rounded-xl max-w-xl w-full shadow-xl">
          <img
            src="/Recurso1.svg"
            alt="Logo Moksha"
            className="w-72 h-auto mx-auto"
          />

          <p className="text-latte mb-6 italic">Una taza que te libera</p>

          {/* Botón de reserva */}
          <div className="mb-8">
            <a
              href="https://wa.me/5492610000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-medium px-5 py-2 rounded-md
                        hover:bg-green-600 transition duration-300 shadow-md text-sm inline-block w-full max-w-xs text-center"
            >
             Reservar por WhatsApp
            </a>

          </div>

          {/* Idiomas */}
          <div className="border-t border-white/30 pt-6">
            <p className="text-sm text-latte mb-4">Selecciona tu idioma:</p>
            <div className="flex flex-col gap-2 text-xs items-center">
              {["es", "en", "pt"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => onEnter(lang)}
                  className="bg-[#724c35] text-white px-4 py-2 rounded-md shadow hover:bg-[#5c3b2a] transition"
                >
                  {lang === "es" && "Entrar en Español"}
                  {lang === "en" && "Enter in English"}
                  {lang === "pt" && "Entrar em Português"}
                </button>
              ))}
            </div>
          </div>

          {/* Botón de ubicación separado */}
          <div className="mt-6">
           <button
          onClick={openMapPopup}
          className="bg-white text-oliva font-medium px-5 py-2 rounded-md
                    hover:bg-gray-100 transition duration-300 shadow-md text-sm border border-beige"
        >
          📍 Ver Ubicación
        </button>

          </div>
        </div>
      </div>

      {/* Popup del Mapa */}
      {showMapPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
            {/* Header del popup */}
            <div className="bg-oliva text-white p-4 flex justify-between items-center">
              <h3 className="text-xl font-amiri">Moksha - Ubicación</h3>
              <button
                onClick={closeMapPopup}
                className="text-white hover:text-gray-300 text-2xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* Contenido del mapa */}
            <div className="p-6">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Ubicación Moksha"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.716752047106!2d-68.84505958480499!3d-32.88945868094154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09c39fbdc0a3%3A0xfcc6d02d5c2851fa!2sPlaza%20Independencia!5e0!3m2!1ses-419!2sar!4v1653680509112!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Información adicional */}
              <div className="mt-4 text-center">
                <p className="text-oliva font-semibold mb-2">Moksha Café Brunch & Bar</p>
                <p className="text-gray-600 text-sm">Plaza Independencia, Mendoza</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="https://maps.google.com/?q=Plaza+Independencia+Mendoza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-oliva text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition text-sm"
                  >
                    Abrir en Google Maps
                  </a>
                  <button
                    onClick={scrollToMapa}
                    className="bg-gray-200 text-oliva px-4 py-2 rounded-full hover:bg-gray-300 transition text-sm"
                  >
                    Ver en la página
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}