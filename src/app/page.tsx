import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="p-5 sm:p-14 md:p-18 lg:p-24 xl:p-42">
      <Navigation />
      <About />
      <Work />
      <Separator className="my-8" />
      <Education />
      <Separator className="my-8" />
      <Skills />
      <Contact />
    </main>
  )
}
