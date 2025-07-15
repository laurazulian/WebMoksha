import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function MenuSection({ title, items }) {
  const { t } = useTranslation();

  return (
    <motion.section
      className="mb-14"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl sm:text-3xl font-serif text-[#4b3b2b] uppercase border-b border-[#d7c4b4] pb-2 mb-6 tracking-wider">
        {t(title)}
      </h3>

      <ul className="divide-y divide-[#e3d9d1]">
        {items.map((item) => (
          <li key={item.name} className="py-6 hover:bg-[#f1ece6]/60 transition duration-300 px-2 rounded">
            <div className="flex justify-between flex-col sm:flex-row sm:items-center">
              <h4 className="text-lg sm:text-xl font-medium text-[#4b3b2b] font-serif">{item.name}</h4>
              <span className="text-md text-[#7d6b5a] sm:ml-6 sm:mt-0 mt-2">{item.price}</span>
            </div>
            <p className="text-sm text-[#7d6b5a] mt-1 sm:mt-2 font-light">{item.description}</p>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
