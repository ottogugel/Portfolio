import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ReadCvLogo } from "@phosphor-icons/react/dist/ssr/ReadCvLogo";
import { Kalam } from "next/font/google";
import Image from "next/image";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

export function ContactSection() {
  return (
    <div className="rounded-lg w-[1820px] h-[528px] ml-10 bg-surfaces flex flex-row items-center justify-between">
      <div className="ml-32">
        <Image src="/avatar.svg" alt="" width={200} height={200} />
        <h1
          className={`${kalam.className} mt-8 font-normal text-base text-strokehigh`}
        >
          Contact
        </h1>
        <p className="text-primary font-medium text-2xl break mt-2">
          Enjoyed my work? Let’s work together
        </p>
        <span className="text-secondary flex mt-5 text-xs font-normal gap-1">
          I’m always up for a chat. Pop me an email at
          <a
            href=""
            className={`${kalam.className}text-base text-strokehigh underline`}
          >
            ottogugel99@gmail.com
          </a>
          or give me a shout on social media.
        </span>
        <div className="mt-4 flex flex-row gap-3">
          <button className="rounded-lg border-yellow-500 border size-10">
            <Image src="/github.svg" alt="" width={24} height={24} className="ml-1.5" />
          </button>
          <button className="rounded-lg border-yellow-500 border size-10">
            <Image src="/linkedin.svg" alt="" width={24} height={24} className="ml-1.5" />
          </button>
        </div>
      </div>
      <div className="mr-96">
        <form>
          <h1>Input</h1>
          <p>Label</p>
          <button className="text-buttonprimary font-medium text-base flex bg-purples hover:bg-purple-800 rounded-lg w-40 h-14 items-center justify-center mt-8">
            Send me a message <ArrowRight size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}
