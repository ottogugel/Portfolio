import { ArrowUp } from "@phosphor-icons/react/dist/ssr/ArrowUp";

export function Footer() {
  return (
    <div>
      <div className="">
        <h1 className="text-secondary">Otto Gugel 2024</h1>
      </div>
      <div className="flex flex-row justify-end gap-3 text-secondary">
        <a href="https://github.com/ottogugel" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ottogugel/" target="_blank">
          LinkedIn
        </a>
        <ArrowUp size={24} />
      </div>
    </div>
  );
}