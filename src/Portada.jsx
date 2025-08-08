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
    <div className="min-h-screen flex flex-col relative overflow-hidden">
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

      {/* Logo */}
      {animationComplete && (
        <img
          src="/Recurso1.svg"
          className="relative mx-auto mt-6 
          w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72
          object-contain pointer-events-none select-none drop-shadow-lg"
          style={{ filter: "drop-shadow(0 0 4px rgba(0,0,0,0.7))" }}
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
            <p className="text-latte mb-6 italic text-lg">
              Una taza que te libera
            </p>

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
                <button
                  onClick={() => onEnter("es")}
                  className="bg-mokka text-white px-8 py-2 rounded-md shadow hover:bg-[#5c3b2a] transition font-medium w-full sm:w-auto text-center"
                >
                  Entrar en Español
                </button>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!..."
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-oliva font-semibold mb-2">
                  Moksha Café Brunch & Bar
                </p>
                <p className="text-gray-600 text-sm">
                  Plaza Independencia, Mendoza
                </p>
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

      {/* CONTACTO */}
      <section className="bg-beige text-oliva py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Info de contacto */}
          <div className="space-y-4 text-center md:text-left w-full md:w-1/2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
              <span className="text-base md:text-lg font-medium">
                +54 9 261 123-4567
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src="/icons/pin.svg" alt="Ubicación" className="w-6 h-6" />
              <span className="text-base md:text-lg font-medium">
                Av. Arístides Villanueva 123, Mendoza
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src="/icons/email.svg" alt="Email" className="w-6 h-6" />
              <span className="text-base md:text-lg font-medium">
                hola@mokshacafe.com
              </span>
            </div>
          </div>

          {/* Imagen contacto */}
          <div className="w-full md:w-1/2">
            <img
              src="/FotoContacto.jpg"
              alt="Contacto Moksha"
              className="rounded-xl shadow-lg w-full h-auto object-cover max-h-60 md:max-h-72"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gris bg-beige font-grotesque">
        © {new Date().getFullYear()} Moksha. Todos los derechos reservados. Hecho con amor por MACA.
      </footer>
    </div>
  );
}
