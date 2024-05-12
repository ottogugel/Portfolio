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
      <div className="h-[80px] mt-5">
        <Navbar />
      </div>

      <div className="mt-10 h-[609px] flex">
        <Headline />
      </div>

      <div className="h-[620px]">
        <AboutSection />
      </div>

      <div className="w-[1903px] h-[680px]">
        <ProjectsSection />
      </div>

      <div className="h-[608px]">
        <ContactSection />
      </div>

      <div className="w-[1903px] h-28">
        <Footer />
      </div>
    </main>
  );
}
