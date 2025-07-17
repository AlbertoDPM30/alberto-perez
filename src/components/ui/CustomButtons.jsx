import React from "react";

export default function CustomButtons({ text, icon, url }) {
  return (
    <a
      href={url}
      target="_black"
      className="px-3 py-2 rounded-2xl border-2 border-blue-800 text-blue-800 font-semibold hover:bg-blue-800 hover:text-white transition-colors duration-300"
    >
      {text}
      {icon}
    </a>
  );
}
