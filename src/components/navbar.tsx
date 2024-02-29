import { Kalam } from "next/font/google";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

export function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="pl-10">
        <a href="#" className={`${kalam.className} text-lg font-normal text-primary ml-20`}>OttoGugel</a>
      </div>
      <div className="flex gap-4 pr-10">
        <a href="#" className="text-primary font-bold">
          Home
        </a>
        <a href="#" className="text-secondary font-normal hover:text-gray-50">
          About
        </a>
        <a href="#" className="text-secondary font-normal hover:text-gray-50">
          Projects
        </a>
        <a href="#" className="text-secondary font-normal hover:text-gray-50">
          Contact
        </a>
      </div>
    </div>
  );
}
