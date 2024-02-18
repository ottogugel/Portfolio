import { Sun } from "@phosphor-icons/react/dist/ssr/Sun";

export function Navbar() {
  return (
    <>
      <h1 className="text-white ml-20">Logo Otto</h1>
      <div className="flex items-center gap-4 mr-20">
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
        <a href="#" className="text-secondary font-normal hover:text-gray-50">
          PT
        </a>
        <a href="#">
          <Sun size={24} color="white" />
        </a>
      </div>
    </>
  );
}
