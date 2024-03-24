'use client'
import { Kalam } from "next/font/google";
import { useState } from "react";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

export function Navbar() {

  const [isPortuguese, setIsPortuguese] = useState(false)
  const [isEnglish, setIsEnglish] = useState(true)

  const changeLanguage = () => {
    setIsEnglish((previsEnglish) => !previsEnglish);
  }

  return (
    <div className="md:flex md:items-center md:justify-between md:fixed md:gap-[1421px]">
      <div className="md:pl-10">
        <a
          href="#"
          className={`${kalam.className} md:text-lg md:font-normal md:text-primary md:ml-20`}
        >
          OttoGugel
        </a>
      </div>
      <div className="md:flex md:gap-4 md:pr-10">
        <a
          href="#"
          className="md:text-secondary md:font-normal md:hover:text-gray-50"
        >
          Home
        </a>
        <a
          href="#about"
          className="md:text-secondary md:font-normal md:hover:text-gray-50"
        >
          About
        </a>
        <a
          href="#projects"
          className="md:text-secondary md:font-normal md:hover:text-gray-50"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="md:text-secondary md:font-normal md:hover:text-gray-50"
        >
          Contact
        </a>
        <button
          className="md:text-secondary md:font-normal md:hover:text-gray-50"
          onClick={changeLanguage}
        >
          {isEnglish ? <h1>EN</h1> : <h1>PT</h1>}
        </button>
      </div>
    </div>
  );
}
