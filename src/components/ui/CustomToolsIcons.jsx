"use client";

import { useState } from "react";
import CustomIcons from "./CustomIcons";

export default function CustomToolsIcons({ src, alt, text }) {
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`relative h-[3.4rem] flex justify-center items-center gap-1 w-full transition-all ease-linear duration-700 hover:bg-indigo-900 rounded-lg ${
        active ? "shadow-md shadow-gray-700/35" : ""
      }`}
      target="_blank"
      href="https://www.linkedin.com/in/alberto-perez-adpm"
    >
      <CustomIcons
        src={src}
        width={32}
        height={32}
        alt={alt}
        styles={`absolute top-0 z-0 transition ease-in-out duration-700 ${
          active ? "-translate-x-2/3" : ""
        }`}
      />
      <span
        className={`absolute z-0 top-0 right-0 h-[3.4rem] pr-4 flex items-center text-sm text-white font-semibold transition-all ease-in-out duration-400 ${
          active ? "block" : "hidden"
        }`}
      >
        {text}
      </span>
    </div>
  );
}
