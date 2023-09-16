import { About } from "@/components/about";
import { Education } from "@/components/education";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="p-24">
      <ModeToggle />
      <About />
      <Education />
    </main>
  )
}
