'use client'
import { Kalam } from "next/font/google";
import { motion } from "framer-motion";
import Toggle from "./ui/toggle";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

export function Navbar() {

  return (
    <motion.div
      className="md:inline-flex md:items-center md:justify-center md:fixed md:gap-[1440px] z-10 left-0 right-0 mt-5"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
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
        <Toggle />
      </div>
    </motion.div>
  );
}
