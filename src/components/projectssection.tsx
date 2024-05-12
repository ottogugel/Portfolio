'use client'
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import Image from "next/image";
import { motion } from "framer-motion";

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

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="flex flex-col items-center"
      {...animProps}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-strokehigh">Projects</h1>
      <p className="text-primary font-medium text-2xl mt-2">
        Take a look at my highlighted projects
      </p>

      <div className="grid grid-cols-3 w-[1216px] h-[344px] mt-10">
        <div className="w-[384px] h-[344px] bg-surfaceprimary border-surfaceprimary border hover:border-highlight hover:shadow-card pt-6 rounded-lg group">
          <div className="relative">
            <Image
              src="/esports.svg"
              alt=""
              width={336}
              height={160}
              className="ml-6 rounded-sm"
            />
            <a
              href="https://github.com/ottogugel/nlw-esports-ignite-main"
              target="_blank"
              className="size-12 absolute bottom-28 right-4 flex items-center justify-center rounded-lg bg-surface invisible group-hover:visible shadow-bottom hover:scale-105"
            >
              <Image
                src="/github.svg"
                alt="Github Icon"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              className="size-12 absolute bottom-14 right-4 flex items-center justify-center rounded-lg bg-surface invisible group-hover:visible shadow-bottom"
            >
              <ArrowUpRight size={24} color="white" />
            </a>
          </div>
          <div className="flex flex-row justify-between px-5 pt-4">
            <strong className="text-primary text-xl font-medium flex">
              eSports
            </strong>
            <div className="flex gap-3">
              <Image src="/react.svg" alt="" width={24} height={24} />
              <Image src="/typescript.svg" alt="" width={24} height={24} />
              <Image src="/tailwindcss.svg" alt="" width={24} height={24} />
            </div>
          </div>
          <p className="text-secondary pt-3 text-base text-left px-5">
            NLW eSports has developed a web and mobile platform where gamers can
            find partners for their favorite games.
          </p>
        </div>
        <div className="w-[384px] h-[344px] bg-surfaceprimary pt-6 rounded-lg border-surfaceprimary border hover:border-highlight hover:shadow-card group">
          <div className="relative">
            <Image
              src="/orders.svg"
              alt=""
              width={336}
              height={160}
              className="ml-6 rounded-sm"
            />
            <a
              href="https://github.com/ottogugel/nlw-expert-rn"
              target="_blank"
              className="size-12 absolute bottom-28 right-4 flex items-center justify-center rounded-lg bg-surface invisible group-hover:visible shadow-bottom hover:scale-105"
            >
              <Image
                src="/github.svg"
                alt="Github Icon"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              className="size-12 absolute bottom-14 right-4 flex items-center justify-center rounded-lg bg-surface invisible group-hover:visible shadow-bottom"
            >
              <ArrowUpRight size={24} color="white" />
            </a>
          </div>
          <div className="flex flex-row justify-between px-5 pt-4">
            <strong className="text-primary text-xl font-medium flex">
              Orders
            </strong>
            <div className="flex gap-3">
              <Image src="/reactnative.svg" alt="" width={24} height={24} />
              <Image src="/typescript.svg" alt="" width={24} height={24} />
              <Image src="/tailwindcss.svg" alt="" width={24} height={24} />
            </div>
          </div>
          <p className="text-secondary pt-3 text-base text-left px-5">
            Project built at the NLW Expert event where a delivery application
            was developed.
          </p>
        </div>
        <div className="w-[384px] h-[344px] bg-surfaceprimary pt-6 rounded-lg border-surfaceprimary border hover:border-highlight hover:shadow-card group">
          <div className="relative">
            <Image
              src="/doctorcare2.svg"
              alt=""
              width={336}
              height={160}
              className="ml-6 rounded-sm"
            />
            <a
              href="https://github.com/ottogugel/DoctorCare"
              target="_blank"
              className="size-12 absolute bottom-28 right-4 flex items-center justify-center rounded-lg bg-surface invisible group-hover:visible shadow-bottom hover:scale-105 cursor-pointer"
            >
              <Image
                src="/github.svg"
                alt="Github Icon"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              className="size-12 absolute bottom-14 right-4 flex items-center justify-center rounded-lg bg-surface invisible group-hover:visible shadow-bottom"
            >
              <ArrowUpRight size={24} color="white" />
            </a>
          </div>
          <div className="flex flex-row justify-between px-5 pt-4">
            <strong className="text-primary text-xl font-medium flex">
              DoctorCare
            </strong>
            <div className="flex gap-3">
              <Image src="/css.svg" alt="" width={24} height={24} />
              <Image src="/html.svg" alt="" width={24} height={24} />
              <Image src="/js.svg" alt="" width={24} height={24} />
            </div>
          </div>
          <p className="text-secondary pt-3 text-base text-left px-5">
            A project inspired by a healthcare website. Using markup, styling
            and programming languages and the JS ScrollReveal Library.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <a
          href="https://github.com/ottogugel?tab=repositories"
          target="_blank"
          className="text-buttonprimary font-medium text-base flex bg-surfaces hover:bg-white/20 rounded-lg w-32 h-14 items-center justify-center mt-8"
        >
          See all <ArrowRight size={24} className="ml-2" />
        </a>
      </div>
    </motion.section>
  );
}