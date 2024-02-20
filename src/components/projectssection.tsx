import Image from "next/image";

export function ProjectsSections() {
  return (
    <div className="text-center">
      <h1 className="text-strokehigh">Projects</h1>
      <p className="text-primary font-medium text-2xl mt-2">
        Take a look at my highlighted projects
      </p>

      <div className="grid grid-cols-3 w-[1216px] h-[344px] mt-10">
        <div className="w-[384px] h-[344px] bg-surfaceprimary pt-6">
          <Image
            src="/projectimage.svg"
            alt=""
            width={336}
            height={160}
            className="ml-6 rounded-sm"
          />
          <div className="flex flex-row justify-between px-5 pt-4">
            <p className="text-secondary">Jul - Dec 2022</p>
            <span><Image src="/js.svg" alt="" width={24} height={24} /></span>
          </div>
          <strong className="text-primary text-xl font-medium flex px-5 pt-4">
            DevLinks
          </strong>
          <p className="text-primary flex px-5 pt-4">
            A link agragator for social media.
          </p>
        </div>
        <div className="w-[384px] h-[344px] bg-surfaceprimary pt-6">
          <Image
            src="/projectimage.svg"
            alt=""
            width={336}
            height={160}
            className="ml-6 rounded-sm"
          />
          <div className="flex flex-row justify-between px-5 pt-4">
            <p className="text-secondary">Jul - Dec 2022</p>
            <span>Icone</span>
          </div>
          <strong className="text-primary text-xl font-medium flex px-5 pt-4">
            DevLinks
          </strong>
          <p className="text-primary flex px-5 pt-4">
            A link agragator for social media.
          </p>
        </div>
        <div className="w-[384px] h-[344px] bg-surfaceprimary pt-6">
          <Image
            src="/projectimage.svg"
            alt=""
            width={336}
            height={160}
            className="ml-6 rounded-sm"
          />
          <div className="flex flex-row justify-between px-5 pt-4">
            <p className="text-secondary">Jul - Dec 2022</p>
            <span>Icone</span>
          </div>
          <strong className="text-primary text-xl font-medium flex px-5 pt-4">
            DevLinks
          </strong>
          <p className="text-primary flex px-5 pt-4">
            A link agragator for social media.
          </p>
        </div>
      </div>
    </div>
  );
}