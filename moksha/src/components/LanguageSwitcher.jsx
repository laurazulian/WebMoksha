import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="absolute top-6 right-6 text-sm text-[#7d6b5a]">
      <button
        onClick={() => i18n.changeLanguage("es")}
        className="mr-2 hover:underline"
      >
        ES
      </button>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className="hover:underline"
      >
        EN
      </button>
    </div>
  );
}
