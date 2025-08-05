import React from "react";
import { motion } from "framer-motion";

export default function MokshaLanding({ menuRef, mapaRef, mostrarHero }) {
  const productos = [
    { categoria: "To start", items: ["Chicken Corn", "Hot N Soup", "Veggie Corn"] },
    { categoria: "Share", items: ["Chicken Roll", "Avocado Roll", "Veggie Corn"] },
    { categoria: "Main", items: ["Spaghetti", "Prawn Noodle", "Lasagna"] },
    { categoria: "Sides", items: ["Prawn Chili", "Fried Chicken", "Spicy Chicken"] },
    { categoria: "Desserts", items: ["Apple Cake", "Cheesecake", "Pancakes"] },
    { categoria: "Drinks", items: ["Water", "Coke", "Beer"] },
    { categoria: "Wines", items: ["White", "Red", "Rosé"] },
  ];

  const seccionesConImagen = [1, 3, 5];

  const scrollToMapa = () => {
    if (mapaRef.current) {
      mapaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-grotesque scroll-smooth min-h-screen flex flex-col">
      {/* HERO */}
      {mostrarHero && (
        <motion.section
          id="inicio"
          className="min-h-screen relative flex flex-col justify-center items-center text-white text-center px-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Fondo animado */}
          <div className="absolute inset-0 z-0">
            {fondoImgs.map((img, i) => (
              <div
                key={i}
                className={`bg-cover bg-center absolute inset-0 animate-fadeAnimation`}
                style={{ 
                  backgroundImage: `url(${img})`,
                  animationDelay: `${i * 8}s`,
                  animationDuration: `${fondoImgs.length * 8}s`
                }}
              ></div>
            ))}
            {/* Capa negra semi-transparente para contraste */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          {/* Contenido encima del fondo */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative z-10 p-8 rounded-lg max-w-xl"
          >
            <h1 className="mb-6">
              <img
                src="/Recurso1.svg"
                alt="Logo Moksha"
                className="w-72 h-auto mx-auto"
              />
            </h1>

            <p className="italic text-lg font-amiri text-latte mb-6">
              Una taza que te libera.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="#productos"
                className="bg-white text-oliva font-semibold px-6 py-3 rounded-full hover:bg-arena transition"
              >
                Ver menú
              </a>

              <button
                onClick={scrollToMapa}
                className="bg-white text-oliva font-semibold px-6 py-3 rounded-full hover:bg-arena transition"
              >
                Ver mapa
              </button>

              <a
                href="https://wa.me/5492610000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.section>
      )}

      {/* MENÚ */}
      <section id="productos" ref={menuRef} className="py-16 px-4 md:px-12 flex-grow">
        <div className="max-w-7xl mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((grupo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col "
            >
              <h2 className="text-xl font-amiri text-mokka border-b border-gris pb-2 mb-6 uppercase tracking-wider">
                {grupo.categoria}
              </h2>
              <ul className="space-y-5 flex-grow">
                {grupo.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center hover:bg-beige/30 rounded-md px-3 py-2 cursor-pointer transition"
                  >
                    <div>
                      <h3 className="font-semibold text-md">{item}</h3>
                      <p className="text-sm text-gris font-light">
                        Lorem ipsum dolor sit amet, consectetur elit.
                      </p>
                    </div>
                    <span className="text-md font-semibold text-tostado">$10.00</span>
                  </li>
                ))}
              </ul>

              {seccionesConImagen.includes(idx) && (
                <div className="mt-6">
                  <img
                    src={`/menu-img-${idx}.jpg`}
                    alt="Delicia del menú"
                    className="w-full rounded-lg shadow-md object-cover h-40"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* MAPA */}
      <section ref={mapaRef} className="px-4 md:px-12 py-12">
        <h2 className="text-2xl font-amiri text-center text-mokka mb-6">Dónde estamos</h2>
        <div className="w-full max-w-lg mx-auto h-64 rounded-xl overflow-hidden shadow-lg">
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
      </section>

      {/* CONTACTO */}
      <section className="bg-black text-white py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Info de contacto */}
          <div className="space-y-3 text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
              <span>+54 9 261 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/pin.svg" alt="Ubicación" className="w-5 h-5" />
              <span>Av. Arístides Villanueva 123, Mendoza</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/email.svg" alt="Email" className="w-5 h-5" />
              <span>hola@mokshacafe.com</span>
            </div>
          </div>

          {/* Logo */}
          <div>
            <img src="/logo-moksha-blanco.svg" alt="Moksha Logo" className="h-16 md:h-20" />
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