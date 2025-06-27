"use client";

import { useState } from "react";

export default function Header({ tags = {} }) {
  const [showNav, setShowNav] = useState("hidden");

  return (
    <>
      <header className={`h-[3rem] md:h-[5rem] flex items-center fixed`}>
        <div className="absolute z-30 h-[3rem] md:h-[5rem] inset-0 bg-gradient-to-b from-indigo-900/30 to-purple-800/10 backdrop-filter backdrop-blur-xs"></div>
        {/* MOBILE */}
        <nav className="relative z-40 w-[100dvw] md:hidden flex flex-col items-end justify-center px-4">
          <button
            onClick={() => {
              return showNav == "hidden"
                ? setShowNav("flex")
                : setShowNav("hidden");
            }}
            className="p-4 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-100 hover:text-neutral-300 hover:scale-125 transition-all ease-in-out duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <ul
            className={`fixed z-50 mt-12 bottom-0 inset-0 w-full h-fit p-5 text-xl font-semibold ${showNav} flex-col flex-nowrap justify-center items-start animate-top-fade bg-gradient-to-b to-indigo-900/30 from-purple-800/10 backdrop-filter backdrop-blur-xs`}
          >
            {Object.values(tags).map(({ item, url }) => (
              <li key={item} className="mb-4">
                <a
                  className="text-neutral-100 text-shadow-md text-shadow-neutral-700/30 transition-all ease-in-out duration-500 hover:text-indigo-300 border-b-2"
                  href={`${url}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* DESKTOP */}
        <nav className="relative z-100 md:flex hidden">
          <ul className="w-[100dvw] text-xl font-semibold flex flex-row flex-nowrap justify-evenly items-center animate-top-fade">
            {Object.values(tags).map(({ item, url }) => (
              <li key={item}>
                <a
                  className="text-neutral-100 text-shadow-md text-shadow-neutral-700/30 transition-all ease-in-out duration-500 hover:text-indigo-300"
                  href={`${url}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
