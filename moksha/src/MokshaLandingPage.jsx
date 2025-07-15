import React from "react";
import Header from "./components/Header";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";
import ReservationButton from "./components/ReservationButton";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "./i18n"; // inicialización

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

export default function MokshaLandingPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f6f1ec] font-serif">
  <LanguageSwitcher />
  <Header />
  <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h2 className="text-2xl sm:text-3xl text-center text-[#4b3b2b] mb-8">{t("menu")}</h2>

    {menu.map((section) => (
      <MenuSection key={section.category} title={section.category} items={section.items} />
    ))}

    {/* ✅ Botón flotante fuera del .map() */}
    <div className="fixed bottom-5 right-5 sm:hidden z-50">
      <button className="bg-[#d7c4b4] text-[#4b3b2b] px-4 py-2 rounded-full shadow-md hover:bg-[#cbb09d] transition-all">
        Reservar
      </button>
    </div>
  </main>
  <Footer />
</div>

  );
}
