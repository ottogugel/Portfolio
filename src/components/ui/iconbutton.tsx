import Image from "next/image";

interface IconButtonProps {

}

export function IconButton() {
  return (
    <a
      href="https://github.com/ottogugel/DoctorCare"
      target="_blank"
      className="size-12 absolute bottom-28 right-4 flex items-center justify-center rounded-lg bg-surface invisible group-hover:visible shadow-bottom hover:scale-105 cursor-pointer"
    >
      <Image src="/github.svg" alt="Github Icon" sizes="" width={24} height={24} />
    </a>
  );

}