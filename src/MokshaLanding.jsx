import React from "react";
import { motion } from "framer-motion";

export default function MokshaLanding() {
  const productos = [
    { categoria: "To start", items: ["Chicken Corn", "Hot N Soup", "Veggie Corn"] },
    { categoria: "Share", items: ["Chicken Roll", "Avocado Roll", "Veggie Corn"] },
    { categoria: "Main", items: ["Spaghetti", "Prawn Noodle", "Lasagna"] },
    { categoria: "Sides", items: ["Prawn Chili", "Fried Chicken", "Spicy Chicken"] },
    { categoria: "Desserts", items: ["Apple Cake", "Cheesecake", "Pancakes"] },
    { categoria: "Drinks", items: ["Water", "Coke", "Beer"] },
    { categoria: "Wines", items: ["White", "Red", "Rosé"] },
  ];

  const seccionesConImagen = [1, 3, 5]; // cada 2 secciones insertamos imagen

  return (
    <div className="font-sans text-[#333] bg-[#f8f4f0] scroll-smooth min-h-screen flex flex-col">
      {/* HERO LANDING */}
      <motion.section
        id="inicio"
        className="min-h-screen bg-[url('./Foto1.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="bg-black bg-opacity-50 p-8 rounded-lg max-w-xl"
          >
            <h1 className="mb-6">
              <img
                src="./Recurso1.svg"
                alt="Logo Moksha"
                className="w-70 h-auto mx-auto "
              />
            </h1>


            <p className="italic text-lg mb-6">Una taza que te libera.</p>

            <a
              href="#productos"
              className="bg-white text-[#747c3c] font-semibold px-6 py-3 rounded-full hover:bg-[#f8f4f0] transition"
            >
              Ver menú
            </a>

            <a
              href="https://wa.me/5492610000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition"
            >
              Reservar por WhatsApp
            </a>
          </motion.div>
      </motion.section>

      {/* SECCIÓN DE MENÚ */}
      <section id="productos" className="py-16 px-4 md:px-12 flex-grow">
        <div className="max-w-7xl mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((grupo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
            >
              <h2 className="text-2xl font-serif text-[#747c3c] border-b border-gray-300 pb-2 mb-6 uppercase tracking-wider">
                {grupo.categoria}
              </h2>
              <ul className="space-y-5 flex-grow">
                {grupo.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center hover:bg-[#f1f1e6] rounded-md px-3 py-2 cursor-pointer transition"
                  >
                    <div>
                      <h3 className="font-semibold text-md">{item}</h3>
                      <p className="text-sm text-gray-600 font-light">
                        Lorem ipsum dolor sit amet, consectetur elit.
                      </p>
                    </div>
                    <span className="text-md font-semibold text-gray-700">$10.00</span>
                  </li>
                ))}
              </ul>

              {/* Imagen cada 2 secciones */}
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

      {/* MAPA DE UBICACIÓN */}
      <section className="px-4 md:px-12 py-12">
        <h2 className="text-2xl font-serif text-center text-[#747c3c] mb-6">Dónde estamos</h2>
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
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

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-[#e8e4dc]">
        © {new Date().getFullYear()} Moksha. Todos los derechos reservados. Hecho con amor por MACA.
      </footer>
    </div>
  );
}
