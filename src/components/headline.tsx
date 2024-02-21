import { ReadCvLogo } from "@phosphor-icons/react/dist/ssr/ReadCvLogo";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Kalam } from "next/font/google";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

export function Headline() {
  return (
    <div className="mt-24 ml-40  rounded-lg w-[592px] h-[298px]">
      <div className="mb-8 r-5">
        <h1 className={`${kalam.className} text-5xl text-primary font-normal`}>
          Hi, I'm Otto
        </h1>
      </div>
      <span className="font-medium text-2xl text-primary">
        Front-end developer and innovation enthusiast
      </span>
      <p className="text-secondary mt-4">
        Over 4 years of experience in the tech industry. I specialize in
        building innovative web and mobile applications using technologies such
        as React, React Native, and Node.js.
      </p>

      <div className="flex flex-row items-center gap-3 mt-10">
        <button className="rounded-lg bg-surfaces hover:bg-white/30 transition-colors duration-300 w-40 h-14 text-primary font-medium flex items-center justify-center">
          <ReadCvLogo size={24} className="mr-1" /> My Resume
        </button>
        <button className="rounded-lg bg-purples hover:bg-purple-500/90 transition-colors duration-300 w-40 h-14 text-buttonprimary font-medium flex items-center justify-center">
          Get in Touch <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
