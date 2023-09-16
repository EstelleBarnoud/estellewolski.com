import { About } from "@/components/about";
import { Education } from "@/components/education";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
      <About />
      <Education />
    </main>
  )
}
