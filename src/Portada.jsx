import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portada({ onEnter, mapaRef }) {
  const [showMapPopup, setShowMapPopup] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const scrollToMapa = () => {
    if (mapaRef?.current) {
      mapaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo con foto */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo.jpg')" }}
      />

      {/* Fondo negro semitransparente */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Fondo blanco animado que desaparece */}
      <AnimatePresence>
        {!animationComplete && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex justify-center items-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            onAnimationComplete={() => setAnimationComplete(true)}
          >
            {/* Logo grande blanco animado */}
            <motion.img
              src="/Recurso1.svg"
              alt="Logo Moksha"
              initial={{ scale: 3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="w-64 h-64 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo fijo y visible luego */}
      {animationComplete && (
        <img
          src="/Recurso1.svg"
          className="fixed top-6 left-1/2 transform -translate-x-1/2 w-80 h-80 object-contain z-50 pointer-events-none select-none drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.7))' }}
        />
      )}

      {/* Contenido principal */}
      {animationComplete && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 pt-[1rem]"
        >
          <div className="max-w-xl w-full bg-transparent rounded-xl p-8">
            <p className="text-latte mb-6 italic text-lg">Una taza que te libera</p>

            {/* Botón de reserva */}
            <div className="mb-8">
              <a
                href="https://wa.me/5492610000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-oliva text-white font-medium px-5 py-2 rounded-md hover:bg-[#65651b] transition duration-300 shadow-md text-sm inline-block w-full max-w-xs"
              >
                Reservar por WhatsApp
              </a>
            </div>

            {/* Idiomas */}
            <div className="border-t border-white/30 pt-6">
              <p className="text-sm text-latte mb-4">Selecciona tu idioma:</p>
              <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-4 items-center gap-3">
                {/* Botón texto para Español */}
                <button
                  onClick={() => onEnter("es")}
                  className="bg-mokka text-white px-8 py-2 rounded-md shadow hover:bg-[#5c3b2a] transition font-medium w-full sm:w-auto text-center"
                >
                  Entrar en Español
                </button>

                {/* Botón bandera Inglés */}
                <button
                  onClick={() => onEnter("en")}
                  className="bg-mokka rounded-md shadow hover:bg-[#5c3b2a] transition p-1 flex items-center justify-center w-12 h-12"
                  aria-label="Enter in English"
                >
                  <img
                    src="/EEUU.png"
                    alt="English Flag"
                    className="w-8 h-8 object-contain"
                  />
                </button>

                {/* Botón bandera Portugués */}
                <button
                  onClick={() => onEnter("pt")}
                  className="bg-mokka rounded-md shadow hover:bg-[#5c3b2a] transition p-1 flex items-center justify-center w-12 h-12"
                  aria-label="Entrar em Português"
                >
                  <img
                    src="/Brasil.png"
                    alt="Portuguese Flag"
                    className="w-8 h-8 object-contain"
                  />
                </button>
              </div>
            </div>

            {/* Botón ubicación */}
            <div className="mt-6">
              <button
                onClick={() => setShowMapPopup(true)}
                className="bg-white text-oliva font-medium px-5 py-2 rounded-md hover:bg-arena transition duration-300 shadow-md text-sm border border-beige"
              >
                📍 Ver Ubicación
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Popup Mapa */}
      {showMapPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative shadow-lg">
            <div className="bg-oliva text-white p-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold">Moksha - Ubicación</h3>
              <button
                onClick={() => setShowMapPopup(false)}
                className="text-white hover:text-gray-300 text-2xl font-bold"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Ubicación Moksha"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.716752047106!2d-68.84505958480499!3d-32.88945868094154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09c39fbdc0a3%3A0xfcc6d02d5c2851fa!2sPlaza%20Independencia!5e0!3m2!1ses-419!2sar!4v1653680509112!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-oliva font-semibold mb-2">
                  Moksha Café Brunch & Bar
                </p>
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
