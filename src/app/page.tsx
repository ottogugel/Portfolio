import { Navbar } from "@/components/navbar";
import { Headline } from "../components/headline";
import Image from "next/image";
import { AboutSection } from "@/components/aboutsection";
import { ProjectsSection } from "@/components/projectssection";
import { ContactSection } from "@/components/contactsection";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <div className="w-[1903px] h-[80px] mt-5">
        <Navbar />
      </div>

      <div className="mt-10 w-full h-[609px] flex flex-row">
        <Headline />

        <div className="mt-24 ml-72  rounded-lg w-[592px] h-[298px]">
          <div className="mb-8 r-5">
            <Image src="/bro1.svg" alt="" width={500} height={500} />
          </div>
        </div>
      </div>

      <div className="w-full h-[620px]">
        <AboutSection />
      </div>

      <div className="w-[1903px] h-[680px]">
      <ProjectsSection />
      </div>

      <div className="w-full h-[608px]">
        <ContactSection />
      </div>

      <div className="w-full h-[112px] border border-b">
        <Footer />
      </div>
    </main>
  );
}
