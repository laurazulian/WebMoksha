import React, { useState } from 'react';

export default function Portada({ onEnter, mapaRef }) {
  const [showMapPopup, setShowMapPopup] = useState(false);

  const scrollToMapa = () => {
    if (mapaRef && mapaRef.current) {
      mapaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMapPopup = () => {
    setShowMapPopup(true);
  };

  const closeMapPopup = () => {
    setShowMapPopup(false);
  };

  return (
    <div className="min-h-screen bg-[url('/Foto1.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6">
      <div className="bg-black/60 p-8 rounded-xl max-w-xl w-full">
        <img
          src="/Recurso1.svg"
          alt="Logo Moksha"
          className="w-56 h-auto mx-auto rounded-xl shadow-lg bg-white/80 p-2 border-2 border-beige mb-6"
        />
        <h1 className="text-3xl font-amiri mb-4">Bienvenidos a Moksha</h1>
        <p className="text-latte mb-6 italic">Una taza que te libera</p>
        
        {/* Botón de reserva */}
        <div className="mb-8">
          <a
            href="https://wa.me/5492610000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            🥤 Reservar Mesa - WhatsApp
          </a>
        </div>

        {/* Idiomas */}
        <div className="border-t border-white/30 pt-6">
          <p className="text-sm text-latte mb-4">Selecciona tu idioma:</p>
          <div className="flex flex-col gap-2 text-xs items-center">
            <button
              onClick={() => onEnter("es")}
              className="bg-white text-oliva font-semibold px-3 py-1.5 rounded-full hover:bg-arena transition w-40"
            >
              Entrar en Español
            </button>
            <button
              onClick={() => onEnter("en")}
              className="bg-white text-oliva font-semibold px-3 py-1.5 rounded-full hover:bg-arena transition w-40"
            >
              Enter in English
            </button>
            <button
              onClick={() => onEnter("pt")}
              className="bg-white text-oliva font-semibold px-3 py-1.5 rounded-full hover:bg-arena transition w-40"
            >
              Entrar em Português
            </button>
          </div>
        </div>
        
        {/* Botón de ubicación separado */}
        <div className="mt-6">
          <button
            onClick={openMapPopup}
            className="bg-white/90 text-oliva font-semibold px-6 py-3 rounded-full hover:bg-white transition-all duration-300 border-2 border-beige"
          >
            📍 Ver Ubicación
          </button>
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