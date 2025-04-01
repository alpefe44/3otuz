"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function LanguageMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleImage, setVisibleImage] = useState("tr.svg");

  const languageOptions = ["tr", "en"];

  function onClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative inline-block ">
      <button className="transform translate-y-1" onClick={onClick}>
        <Image src={visibleImage} width={25} height={25} alt="tr" />
      </button>

      <div
        className={`absolute left-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-md 
        flex flex-col gap-2 p-3 transition-all duration-300 transform
        ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        {languageOptions.map((item) => {
          const uzanti = `${item}.svg`;

          return (
            <button
              key={item}
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md transition-all"
              onClick={() => {
                setVisibleImage(uzanti);
                setIsOpen(false); // Seçildiğinde menüyü kapat
              }}
            >
              <Image src={uzanti} width={25} height={25} alt={item} />
              {item.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
