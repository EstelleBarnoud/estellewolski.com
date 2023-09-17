import { About } from "@/components/about";
import { Education } from "@/components/education";
import { ModeToggle } from "@/components/mode-toggle";
import { Skills } from "@/components/skills";
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="p-24">
      <ModeToggle />
      <About />
      <Education />
      <Separator className="my-8" />
      <Skills />
    </main>
  )
}
