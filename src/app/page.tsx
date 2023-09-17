import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="p-24">
      <ModeToggle />
      <About />
      <Work />
      <Education />
      <Separator className="my-8" />
      <Skills />
      <Contact />
    </main>
  )
}
