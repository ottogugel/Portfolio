'use client';
import { ReadCvLogo } from "@phosphor-icons/react/dist/ssr/ReadCvLogo";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { TypeAnimation } from "react-type-animation";
import { Kalam } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

const animProps = {
  initial: {
    opacity: 0,
    x: -100,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

export function Headline() {
  return (
    <>
      <motion.section
        className="mt-24 ml-40  rounded-lg w-[592px] h-[298px]"
        {...animProps}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 r-5">
          <h1
            className={`${kalam.className} text-5xl font-normal text-transparent bg-[linear-gradient(180deg,#9955E8_0%,#7BFFAF_90%)] bg-clip-text`}
          >
            Hi, I'm Otto
          </h1>
          <h1
            className={`${kalam.className} text-4xl font-normal text-transparent bg-[linear-gradient(180deg,#9955E8_0%,#7BFFAF_90%)] bg-clip-text mt-4`}
          >
            and I'm a
            <TypeAnimation
              sequence={[
                "Front-end Dev",
                1000,
                "Web designer",
                1000,
                "Mobile Dev",
                10000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary ml-2"
            />
          </h1>
        </div>
        <span className="font-medium text-2xl text-primary">
          Front-end developer and innovation enthusiast
        </span>
        <p className="text-secondary mt-4">
          Over 4 years of experience in the tech industry. I specialize in
          building innovative web and mobile applications using technologies
          such as React, React Native, and Node.js.
        </p>

        <div className="flex flex-row items-center gap-3 mt-10">
          <a
            href="https://www.dropbox.com/scl/fi/a8au29tmlekcfmijb6wkw/Curriculum-Vitae.pdf?rlkey=gvnf5nuqvlmtuvonm95j5az34&dl=0"
            target="_blank"
            className="rounded-lg bg-surfaces hover:bg-white/30 transition-colors duration-300 w-40 h-14 text-primary font-medium flex items-center justify-center"
          >
            <ReadCvLogo size={24} className="mr-1" /> My Resume
          </a>
          <a
            href="https://www.linkedin.com/in/ottogugel/"
            target="_blank"
            className="rounded-lg bg-purples hover:bg-purple-500/90 transition-colors duration-300 w-40 h-14 text-buttonprimary font-medium flex items-center justify-center"
          >
            Get in Touch <ArrowRight size={24} />
          </a>
        </div>
        <div className="flex justify-end mt-10 left-20">
          <Image src="/graphic.svg" alt="" width={100} height={100} />
        </div>
      </motion.section>
      <motion.div
        className="mt-24 ml-72 rounded-lg"
        {...animProps}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 r-5">
          <Image
            src="/bro1.svg"
            alt="A programmer's desk"
            width={500}
            height={500}
          />
        </div>
      </motion.div>
    </>
  );
}
