import React from "react";
import { useTranslation } from "react-i18next";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default function ReservationButton() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center mt-10">
      <button className="flex items-center gap-2 border border-[#d7c4b4] text-[#4b3b2b] px-6 py-2 rounded-full hover:bg-[#d7c4b4]/20 transition-all duration-300">
        <CalendarIcon className="h-5 w-5" />
        {t("reservar")}
      </button>
    </div>
  );
}
