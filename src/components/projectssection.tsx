import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col items-center">
      <h1 className="text-strokehigh">Projects</h1>
      <p className="text-primary font-medium text-2xl mt-2">
        Take a look at my highlighted projects
      </p>

      <div className="grid grid-cols-3 w-[1216px] h-[344px] mt-10">
        <div className="w-[384px] h-[344px] bg-surfaceprimary border-surfaceprimary border-2 hover:border-highlight hover:shadow-card pt-6 rounded-lg ">
          <Image
            src="/esports.svg"
            alt=""
            width={336}
            height={160}
            className="ml-6 rounded-sm"
          />
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
        <div className="w-[384px] h-[344px] bg-surfaceprimary pt-6 rounded-lg hover:scale-110 duration-500 ">
          <Image
            src="/orders.svg"
            alt=""
            width={336}
            height={160}
            className="ml-6 rounded-sm"
          />
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
        <div className="w-[384px] h-[344px] bg-surfaceprimary pt-6 rounded-lg hover:scale-110 duration-500">
          <Image
            src="/doctorcare2.svg"
            alt=""
            width={336}
            height={160}
            className="ml-6 rounded-sm"
          />
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
        <button className="text-buttonprimary font-medium text-base flex bg-surfaces hover:bg-white/30 rounded-lg w-32 h-14 items-center justify-center mt-8">
          See all <ArrowRight size={24} className="ml-2" />
        </button>
      </div>
    </section>
  );
}