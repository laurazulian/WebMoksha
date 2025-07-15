import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="text-center py-10 border-b border-[#d7c4b4] px-4 relative">
      <h1 className="text-4xl sm:text-5xl tracking-wide uppercase text-[#4b3b2b] font-serif">Moksha</h1>
      <p className="mt-2 text-lg italic text-[#7d6b5a]">{t("subtitle")}</p>
    </header>
  );
}
