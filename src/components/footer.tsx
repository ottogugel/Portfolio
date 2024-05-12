import { ArrowUp } from "@phosphor-icons/react/dist/ssr/ArrowUp";

export function Footer() {
  return (
    <div className="flex justify-center items-center px-16 py-8 ">
      <div className="flex gap-5 justify-between">
        <span className="text-secondary text-sm font-normal leading-normal">
          Made with <a className="animate-pulse">💜</a> by Otto Gugel
        </span>
      </div>
      <div className="flex flex-row pl-40 ml-96 gap-6 text-secondary">
        <a
          href="https://github.com/ottogugel"
          target="_blank"
          className="text-base font-normal hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ottogugel/"
          target="_blank"
          className="text-base font-normal hover:text-white"
        >
          LinkedIn
        </a>
        <a
          href="https://wa.me/5583991279742"
          target="_blank"
          className="text-base font-normal hover:text-white"
        >
          Whatsapp
        </a>
        <a href="#">
          <ArrowUp size={24} />
        </a>
      </div>
    </div>
  );
}