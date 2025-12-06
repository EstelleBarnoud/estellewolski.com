"use client"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const sections = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
]

export function Navigation() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <nav className="px-4 mx-auto space-y-2 md:space-y-0 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <Link
              className="text-xl font-bold text-gray-800 dark:text-white lg:text-xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Estelle Wolski&apos;s Portfolio
            </Link>
          </div>
          <div className="flex md:hidden space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400">
                  <svg
                    className=" w-6 h-6 fill-current"
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
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                { sections.map((section, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={section.href}>
                      {section.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </div>
        </div>
        <div className="hidden md:block space-x-4 md:space-x-8">
          { sections.map((section, index) => (
            <Link className="text-gray-700 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300" href={section.href} key={index}>
              {section.name}
            </Link>
          ))}
          <ModeToggle />
        </div>
      </nav>
    </section>
  )
}