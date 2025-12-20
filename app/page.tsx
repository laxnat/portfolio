"use client"

import Link from "next/link";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Home() {
  return (
    <div className="max-w-xl mx-auto">
      {/* Navbar Section */}
      <nav>
        <div className="mx-auto py-5">
          <div className="flex justify-between items-center">
            <a href="#hero" className="text-xl uppercase tracking-wider font-semibold text-white py-1">
              Axl Allan Tan
            </a>
            <div className="flex justify-between items-center gap-4">
              <a href="#projects" className="text-m font-light text-gray hover:text-white">
                projects
              </a>
              <a href="#education" className="text-m font-light text-gray hover:text-white">
                education
              </a>
              <a href="#work" className="text-m font-light text-gray hover:text-white">
                work
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-5">
        <div className="flex items-center gap-4">
          <Image
            src={"/portfoliopfp.jpeg"}
            alt="ProfilePicture"
            width={90}
            height={90}
            className="rounded-full border border-white"
          />
          <div className="text-white">
            <div className="text-xl font-medium">
              Hi, I'm Axl Allan Tan!
            </div>
            {/*
            <div className="flex items-center gap-3 pt-2 pb-1 pl-0.5">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-sm font-light text-gray-400">Available for work</span>
            </div>
            */}
            <div className="flex items-center gap-2">
              <span className="text-sm">📍</span>
              <span className="text-sm font-light text-gray-400">Los Angeles, California</span>
            </div>
          </div>
        </div>
        
        <div className="text-sm font-light text-white pt-4 py-2">
          I'm a full-stack developer who loves crafting clean, scalable web applications. I build solutions that offer both exceptional performance and a delightful user experience.
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4">
          <div className="flex flex-col items-center py-6 gap-3 bg-gray-900/50 hover:bg-gray-800/80 rounded-2xl text-sm font-medium text-gray-300 border border-gray-800/50">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"}
              alt="Next.js"
              width={32}
              height={32}
            />
            Next.js
          </div>
          <div className="flex flex-col items-center py-6 gap-3 bg-gray-900/50 hover:bg-gray-800/80 rounded-2xl text-sm font-medium text-gray-300 border border-gray-800/50">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}
              alt="React"
              width={32}
              height={32}
            />
            React
          </div>
          <div className="flex flex-col items-center py-6 gap-3 bg-gray-900/50 hover:bg-gray-800/80 rounded-2xl text-sm font-medium text-gray-300 border border-gray-800/50">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"}
              alt="Typescript"
              width={32}
              height={32}
            />
            TypeScript
          </div>
          <div className="flex flex-col items-center py-6 gap-3 bg-gray-900/50 hover:bg-gray-800/80 rounded-2xl text-sm font-medium text-gray-300 border border-gray-800/50">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"}
              alt="TailwindCSS"
              width={32}
              height={32}
            />
            Tailwind CSS
          </div>
          <div className="flex flex-col items-center py-6 gap-3 bg-gray-900/50 hover:bg-gray-800/80 rounded-2xl text-sm font-medium text-gray-300 border border-gray-800/50">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"}
              alt="Swift"
              width={32}
              height={32}
            />
            Swift
          </div>
          <div className="flex flex-col items-center py-6 gap-3 bg-gray-900/50 hover:bg-gray-800/80 rounded-2xl text-sm font-medium text-gray-300 border border-gray-800/50">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"}
              alt="PostgreSQL"
              width={32}
              height={32}
            />
            PostgreSQL
          </div>
          <div className="flex flex-col items-center py-6 gap-3 bg-gray-900/50 hover:bg-gray-800/80 rounded-2xl text-sm font-medium text-gray-300 border border-gray-800/50">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg"}
              alt="Prisma"
              width={32}
              height={32}
            />
            Prisma
          </div>
          <div className="flex flex-col items-center py-6 gap-3 bg-gray-900/50 hover:bg-gray-800/80 rounded-2xl text-sm font-medium text-gray-300 border border-gray-800/50">
            <Image
              src={"https://neon.com/brand/neon-logomark-dark-color.svg"}
              alt="Neon"
              width={32}
              height={32}
            />
            Neon
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <span className="text-lg uppercase tracking-wider font-semibold text-white py-1">
          Projects
        </span>
        <div className="gap-3 py-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link
                href="https://tankobon.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative  overflow-hidden rounded-2xl border border-gray-800">
                  <Image
                    src="/tankobonlaunch.png"
                    alt="Tankobon"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                    Tankōbon
                  </div>
                </div>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  A modern manga platform focused on clean design, fast performance,
                  and an immersive reading experience.
                </p>

                <div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    Languages
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md bg-muted px-2 py-1 text-xs">TypeScript</span>
                    <span className="rounded-md bg-muted px-2 py-1 text-xs">Next.js</span>
                    <span className="rounded-md bg-muted px-2 py-1 text-xs">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-5">
        <span className="text-lg uppercase tracking-wider font-semibold text-white py-1">
          Education
        </span>
          <div className="flex items-center gap-4 py-4">
            <Image
              src={"/csulbseal.svg"}
              alt="CSULBSeal"
              width={75}
              height={75}
              className="rounded-full border border-white invert"
            />
            <div>
              <div className="text-xs text-gray-500">Aug 2021 - May 2025</div>
              <div className="text-md font-semibold text-white">California State University, Long Beach</div>
              <div className="text-sm text-gray-400">B.S. in Computer Science</div>
            </div>
          </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-5">
        <span className="text-lg uppercase tracking-wider font-semibold text-white py-1">
          Work
        </span>
        <div className="text-sm font-md text-white py-2">
          <span className="font-semibold">404. </span>
          <span>That's an error.</span>
        </div>
      </section>
    </div>
  );
}
