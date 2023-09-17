import Link from "next/link";
import { Card } from "@/components/ui/card";

const socials = [
	{
		icon:
      <svg
        className=" h-6 w-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
        />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>,
		href: "https://github.com/EstelleBarnoud",
		label: "Github",
		handle: "EstelleBarnoud",
	},
	{
		icon: 
      <svg
        className=" h-6 w-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect height="12" width="4" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>,
		href: "https://www.linkedin.com/in/estellebarnoud/",
		label: "LinkedIn",
		handle: "estellebarnoud",
	},
	{
		icon: 
      <svg
        className=" h-6 w-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>,
		href: "/resume.pdf",
		label: "Resume",
		handle: "Estelle Wolski",
	},
];

export function Contact() {

  return (

    <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
      <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
        {socials.map((s) => (
          <Card>
            <Link
              href={s.href}
              target="_blank"
              className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
            >
              <span
                className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                {s.icon}
              </span>{" "}
              <div className="z-10 flex flex-col items-center">
                <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                  {s.handle}
                </span>
                <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  {s.label}
                </span>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>

  )

}