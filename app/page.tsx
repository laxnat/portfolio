"use client"

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

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
              <a href="#projects" className="text-m font-light text-gray hover:text-white hover:underline">
                projects
              </a>
              <a href="#education" className="text-m font-light text-gray hover:text-white hover:underline">
                education
              </a>
              <a href="#work" className="text-m font-light text-gray hover:text-white hover:underline">
                work
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-5">
        <div className="flex items-center justify-between gap-4">
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
            <div className="flex items-center gap-2">
              <span className="text-sm">📍</span>
              <span className="text-sm font-light text-gray-400">Los Angeles, California</span>
            </div>
          </div>
          <span className="flex items-center gap-3">
            <a
              href="/axlresume2025V3.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
            <a
              href="https://github.com/laxnat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-700 text-white rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/axl-allan-tan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-700 text-white rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </span>
        </div>
        
        <div className="text-sm font-light text-white pt-4 py-2">
          I'm a full-stack developer who loves crafting clean, scalable web applications. I build solutions that offer both exceptional performance and a delightful user experience.
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/30 hover:bg-gray-800/50 rounded-lg border border-gray-800/30 hover:border-gray-700/50 transition-colors">
              <Image
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"}
                alt="Next.js"
                width={20}
                height={20}
              />
              <span className="text-sm font-medium text-gray-300">Next.js</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/30 hover:bg-gray-800/50 rounded-lg border border-gray-800/30 hover:border-gray-700/50 transition-colors">
              <Image
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}
                alt="React"
                width={20}
                height={20}
              />
              <span className="text-sm font-medium text-gray-300">React</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/30 hover:bg-gray-800/50 rounded-lg border border-gray-800/30 hover:border-gray-700/50 transition-colors">
              <Image
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"}
                alt="TypeScript"
                width={20}
                height={20}
              />
              <span className="text-sm font-medium text-gray-300">TypeScript</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/30 hover:bg-gray-800/50 rounded-lg border border-gray-800/30 hover:border-gray-700/50 transition-colors">
              <Image
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"}
                alt="Tailwind CSS"
                width={20}
                height={20}
              />
              <span className="text-sm font-medium text-gray-300">Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/30 hover:bg-gray-800/50 rounded-lg border border-gray-800/30 hover:border-gray-700/50 transition-colors">
              <Image
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"}
                alt="Swift"
                width={20}
                height={20}
              />
              <span className="text-sm font-medium text-gray-300">Swift</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/30 hover:bg-gray-800/50 rounded-lg border border-gray-800/30 hover:border-gray-700/50 transition-colors">
              <Image
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"}
                alt="PostgreSQL"
                width={20}
                height={20}
              />
              <span className="text-sm font-medium text-gray-300">PostgreSQL</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/30 hover:bg-gray-800/50 rounded-lg border border-gray-800/30 hover:border-gray-700/50 transition-colors">
              <Image
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg"}
                alt="Prisma"
                width={20}
                height={20}
              />
              <span className="text-sm font-medium text-gray-300">Prisma</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/30 hover:bg-gray-800/50 rounded-lg border border-gray-800/30 hover:border-gray-700/50 transition-colors">
              <Image
                src={"https://neon.com/brand/neon-logomark-dark-color.svg"}
                alt="Neon"
                width={20}
                height={20}
              />
              <span className="text-sm font-medium text-gray-300">Neon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <span className="text-lg uppercase tracking-wider font-semibold text-white py-1">
          Projects
        </span>
        <div className="flex flex-col items-center gap-10 py-4">
          <div className="relative overflow-hidden rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
            <Link
              href="https://tankobon.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <Image
                src="/tankobonlaunch.png"
                alt="Tankobon"
                width={600}
                height={400}
                className="h-70 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </Link>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Tankōbon</h3>
                <Link
                  href="https://github.com/laxnat/Tankobon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                >
                  View Code →
                </Link>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                A modern manga library management application to track your manga collection, reading progress, and owned volumes.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-gray-600/80 px-3 py-1 text-xs font-medium text-white">
                  TypeScript
                </span>
                <span className="rounded-md bg-gray-600/80 px-3 py-1 text-xs font-medium text-white">
                  Next.js
                </span>
                <span className="rounded-md bg-gray-600/80 px-3 py-1 text-xs font-medium text-white">
                  Tailwind CSS
                </span>
                <span className="rounded-md bg-gray-600/80 px-3 py-1 text-xs font-medium text-white">
                  Prisma
                </span>
                <span className="rounded-md bg-gray-600/80 px-3 py-1 text-xs font-medium text-white">
                  PostgreSQL
                </span>
                <span className="rounded-md bg-gray-600/80 px-3 py-1 text-xs font-medium text-white">
                  Neon
                </span>
              </div>
            </div>
          </div>
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
