import SectionDevider from "@/components/section-divider";
import About from "@/components/sections/About";
import Intro from "@/components/sections/Intro";
import { Providers } from "@/providers";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Providers>
        <Intro />
        <SectionDevider />
        <About />
        <SectionDevider />
      </Providers>
    </main>
  );
}
