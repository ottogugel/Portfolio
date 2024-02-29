import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Kalam } from "next/font/google";
import Image from "next/image";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

export function ContactSection() {
  return (
    <div className="rounded-lg w-[1820px] h-[528px] ml-10 bg-surfaceprimary flex flex-row items-center justify-between">
      <div className="ml-32">
        <Image src="/avatar.svg" alt="" width={220} height={220} />
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
            href="mailto:ottogugel99@gmail.com"
            className={`${kalam.className}text-base text-strokehigh underline`}
          >
            ottogugel99@gmail.com
          </a>
          or give me a shout on social media.
        </span>
        <div className="mt-4 flex flex-row gap-3">
          <a
            href="https://github.com/ottogugel"
            target="_blank"
            className="rounded-lg bg-surfaces size-10 flex items-center justify-center"
          >
            <Image
              src="/github.svg"
              alt=""
              width={24}
              height={24}
              className=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ottogugel/"
            target="_blank"
            className="rounded-lg bg-surfaces size-10 flex items-center justify-center"
          >
            <Image
              src="/linkedin.svg"
              alt=""
              width={24}
              height={24}
              className=""
            />
          </a>
        </div>
      </div>
      <div className="mr-96">
        <form className="">
          <div className="">
            <input
              placeholder="Name"
              id="name"
              type="text"
              className="bg-surface border focus-visible:outline-none focus:border-highlight text-secondary rounded-lg p-3 w-full"
            />
            <div>
              <input
                placeholder="E-mail"
                id="email"
                type="email"
                className="bg-surface rounded-lg text-secondary p-3 mt-4 w-full"
              />
            </div>
            <div>
              <textarea className="p-3 rounded-lg bg-surface text-secondary w-96 h-40 mt-4" placeholder="Your Message" />
            </div>
          </div>
          <button
            type="submit"
            className="text-buttonprimary font-medium text-base flex bg-purples hover:bg-purple-800 rounded-lg w-56 h-14 items-center justify-center mt-8"
          >
            Send me a message <ArrowRight size={24} className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
}
