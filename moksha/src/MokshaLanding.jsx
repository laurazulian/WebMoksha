import React from "react";

export default function MokshaLanding() {
  return (
    <div className="scroll-smooth font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white z-50 shadow">
        <ul className="flex space-x-6 p-4 justify-center text-tierra-oscuro font-semibold">
          <li>
            <a href="#inicio" className="hover:underline">Inicio</a>
          </li>
          <li>
            <a href="#productos" className="hover:underline">Productos</a>
          </li>
          <li>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="min-h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center pt-20"
      >
        <h1 className="text-5xl md:text-7xl text-white drop-shadow-lg font-serif">Moksha 🍷</h1>
      </section>

      {/* Productos */}
      <section id="productos" className="py-20 px-4 bg-[#f8f4f0]">
        <h2 className="text-3xl md:text-4xl text-center mb-10 text-tierra-oscuro font-serif">
          Nuestros Productos
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={`/producto${i + 1}.jpg`}
                alt={`Producto ${i + 1}`}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-tierra-oscuro">
                  Producto {i + 1}
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  Descripción breve del producto número {i + 1}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4 bg-white">
        <h2 className="text-3xl md:text-4xl text-center mb-10 text-tierra-oscuro font-serif">
          Contactanos
        </h2>
        <form className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Correo"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Mensaje"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-tierra-oscuro text-white py-3 px-6 rounded-lg hover:bg-tierra-claro transition"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Moksha. Todos los derechos reservados.
      </footer>
    </div>
  );
}
