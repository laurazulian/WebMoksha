import React from "react";
import { motion } from "framer-motion";

const menu = [
  {
    category: "Entradas",
    items: [
      { name: "Carpaccio de Remolacha", description: "Con crema de almendras y vinagreta cítrica", price: "$3.900" },
      { name: "Pan de Masa Madre", description: "Con oliva especiada y manteca de hierbas", price: "$2.100" },
    ],
  },
  {
    category: "Platos Principales",
    items: [
      { name: "Risotto de Hongos", description: "Con parmesano y aceite de trufa", price: "$6.800" },
      { name: "Cordero Braseado", description: "Con puré rústico y reducción de Malbec", price: "$9.200" },
    ],
  },
  {
    category: "Postres",
    items: [
      { name: "Texturas de Chocolate", description: "Mousse, brownie y tierra de cacao", price: "$3.500" },
      { name: "Pera al Vino", description: "Con crema de cardamomo", price: "$3.200" },
    ],
  },
];

export default function MokshaLanding() {
  return (
    <div className="bg-tierra-claro text-tierra-oscuro font-serif min-h-screen px-4 sm:px-8 py-8 sm:py-12">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-wide">Moksha</h1>
        <p className="mt-4 text-lg sm:text-xl italic text-tierra-oscuro/70">Sabores que inspiran calma</p>
      </header>

      {/* Menú */}
      <main className="max-w-3xl mx-auto space-y-14">
        {menu.map((section, i) => (
          <motion.section
            key={section.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl uppercase tracking-wide border-b border-tierra-oscuro/30 pb-2 mb-6">
              {section.category}
            </h2>

            <div className="space-y-8">
              {section.items.map((item) => (
                <div key={item.name} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">{item.name}</h3>
                    <p className="text-sm sm:text-base text-tierra-oscuro/70">{item.description}</p>
                  </div>
                  <span className="text-sm sm:text-base font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </main>

      {/* Botón flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-tierra-medio text-tierra-oscuro px-5 py-3 rounded-full shadow-md hover:bg-[#cbb09d] transition-all duration-300">
          Reservar
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-tierra-oscuro/50">
        &copy; {new Date().getFullYear()} Moksha. Todos los derechos reservados.
      </footer>
    </div>
  );
}
