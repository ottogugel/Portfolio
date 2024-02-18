import { ReadCvLogo } from "@phosphor-icons/react/dist/ssr/ReadCvLogo";
import { Kalam } from "next/font/google";
import Image from "next/image";

const kalam = Kalam({ weight: "400", subsets: ['latin'] });


export function AboutSection() {
  return (
    <div className="rounded-lg w-[1820px] h-[540px] ml-10 mt-10  bg-surfaces flex flex-row gap-3">
      <div className="ml-28 mt-40">
        <Image src="" alt="" width={600} height={600} />
      </div>
      <div className="ml-32 mt-32">
        <h2>icons</h2>
        <h1
          className={`${kalam.className} mt-5 font-normal text-base text-strokehigh`}
        >
          About me
        </h1>
        <p className="text-primary font-medium text-2xl break">
          Im a passionate software developer looking for my first international
          oppotunity
        </p>
        <span className="text-secondary flex mt-5 text-base font-normal">
          Beyond coding, im a coffee enthusiast, a cat lover, and a self-taught
          artist who enjoys spending my free time doodling. I am currently
          seeking opportunities to bring my skills and enthusiasm to a tech
          company in the United States or Europe and am excited about the
          prospect of relocating to pursue new challenges.
        </span>
        <button className="text-buttonprimary text-medium text-base flex bg-purples hover:bg-purple-800 rounded-lg w-40 h-14 items-center justify-center mt-5">
          <ReadCvLogo size={24} className="mr-1" /> My Resume
        </button>
      </div>
    </div>
  );
}