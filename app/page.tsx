import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto">
      {/* Navbar Section */}
      <nav>
        <div className="mx-auto py-5">
          <div className="flex justify-between items-center">
            <a href="#hero" className="text-xl font-medium text-white">
              Axl Allan Tan
            </a>
            <div className="flex justify-between items-center gap-4">
              <a href="#projects" className="text-m font-light text-gray">
                projects
              </a>
              <a href="#education" className="text-m font-light text-gray">
                education
              </a>
              <a href="#work" className="text-m font-light text-gray">
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
            src={"/favicon.ico"}
            alt="ProfilePicture"
            width={50}
            height={50}
          />
          <div className="text-white">
            <div className="text-xl font-medium">
              Hi, I'm Axl Allan Tan!
            </div>
            <div className="flex items-center gap-2 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-sm font-light text-gray">Available for work</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="gray" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray">Los Angeles, California</span>
        </div>
        <div className="text-sm font-medium text-white py-2">
          I'm a full-stack developer who loves crafting clean, scalable web applications. I build solutions that offer both exceptional performance and a delightful user experience.
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 py-2 gap-4">
          <div className="flex flex-col items-center py-4 gap-4 border border-gray-400 hover:bg-gray-800 rounded-3xl text-sm font-medium text-gray-400">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"}
              alt="Next.js"
              width={30}
              height={30}
            />
            Next.js
          </div>
          <div className="flex flex-col items-center py-4 gap-4 border border-gray-400 hover:bg-gray-800 rounded-3xl text-sm font-medium text-gray-400">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}
              alt="React"
              width={30}
              height={30}
            />
            React
          </div>
          <div className="flex flex-col items-center py-4 gap-4 border border-gray-400 hover:bg-gray-800 rounded-3xl text-sm font-medium text-gray-400">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"}
              alt="Typescript"
              width={30}
              height={30}
            />
            Typescript
          </div>
          <div className="flex flex-col items-center py-4 gap-4 border border-gray-400 hover:bg-gray-800 rounded-3xl text-sm font-medium text-gray-400">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"}
              alt="TailwindCSS"
              width={30}
              height={30}
            />
            Tailwind CSS
          </div>
          <div className="flex flex-col items-center py-4 gap-4 border border-gray-400 hover:bg-gray-800 rounded-3xl text-sm font-medium text-gray-400">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"}
              alt="Swift"
              width={30}
              height={30}
            />
            Swift
          </div>
          <div className="flex flex-col items-center py-4 gap-4 border border-gray-400 hover:bg-gray-800 rounded-3xl text-sm font-medium text-gray-400">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"}
              alt="PostgreSQL"
              width={30}
              height={30}
            />
            PostgreSQL
          </div>
          <div className="flex flex-col items-center py-4 gap-4 border border-gray-400 hover:bg-gray-800 rounded-3xl text-sm font-medium text-gray-400">
            <Image
              src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg"}
              alt="Prisma"
              width={30}
              height={30}
            />
            Prisma
          </div>
          <div className="flex flex-col items-center py-4 gap-4 border border-gray-400 hover:bg-gray-800 rounded-3xl text-sm font-medium text-gray-400">
            <Image
              src={"https://neon.com/brand/neon-logomark-dark-color.svg"}
              alt="Neon"
              width={30}
              height={30}
            />
            Neon
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="text-xl font-medium text-white">
          projects
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-5">
        <div className="text-xl font-medium text-white">
          education
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-5">
        <div className="text-xl font-medium text-white">
          work
        </div>
      </section>
    </div>
  );
}
