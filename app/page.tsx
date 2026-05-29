import Image from "next/image";
import {
  FaJava,
  FaVuejs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col relative px-5 lg:px-16 w-full max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <div className="w-full h-screen grid grid-cols-4 lg:grid-cols-12 gap-6 flex-1 items-center py-12">
        {/* Left Side (Text content) */}
        <div className="col-span-4 lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
          <p className="text-[11px] font-jetbrains-mono font-bold tracking-widest text-primary-container! uppercase">
            <span className="mr-2">SYS.INIT:</span> V1.0.0_STABLE
          </p>

          <h1 className="text-[48px] lg:text-[84px] font-instrument-serif leading-[100%] lg:leading-[90%] tracking-[-0.02em] lg:tracking-[-0.04em] text-on-background">
            Building Systems for humans
          </h1>

          <p className="text-[16px] font-jetbrains-mono leading-[160%] text-on-surface-variant max-w-[80%]">
            Software engineer crafting thoughtful digital experiences
          </p>

          <div className="mt-8 flex gap-4">
            <button className="terminal-border surface-level-1 text-[11px] font-jetbrains-mono font-bold tracking-widest text-on-background px-6 py-3 uppercase hover:text-aqua-glow transition-all cursor-pointer">
              View Projects
            </button>
            <button className="terminal-border surface-level-1 text-[11px] font-jetbrains-mono font-bold tracking-widest text-on-background px-6 py-3 uppercase hover:text-aqua-glow transition-all cursor-pointer">
              Read Blog
            </button>
          </div>
        </div>

        {/* Right Side (Decorative/Terminal visual) */}
        <div className="col-span-4 lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="md:h-80 md:w-80 h-60 w-60 border border-on-surface rounded-[50%] flex items-center justify-center p-3">
            <Image
              src="/lokesh_avatar.png"
              alt="Lokesh Avatar"
              width={320}
              height={320}
              priority
              className="rounded-[50%] object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full py-24 flex flex-col gap-12 border-t border-border-dim mt-12">
        <div>
          <p className="text-[11px] font-jetbrains-mono font-bold tracking-widest text-aqua-glow uppercase mb-4">
            <span className="mr-2">{">"}</span> CAPABILITIES
          </p>
          <h2 className="text-[42px] font-instrument-serif leading-[110%] text-on-background">
            Technical Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Programming Languages */}
          <div className="terminal-border surface-level-1 p-6 flex flex-col gap-6 hover:border-aqua-glow transition-colors duration-300">
            <h3 className="text-[13px] font-jetbrains-mono font-bold uppercase text-on-surface-variant border-b border-border-dim pb-4 flex items-center">
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <SiJavascript className="text-aqua-glow" size={14} /> JavaScript
              </span>
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <FaJava className="text-aqua-glow" size={14} /> Java
              </span>
            </div>
          </div>

          {/* Card 2: Frameworks & Libraries */}
          <div className="terminal-border surface-level-1 p-6 flex flex-col gap-6 hover:border-aqua-glow transition-colors duration-300">
            <h3 className="text-[13px] font-jetbrains-mono font-bold uppercase text-on-surface-variant border-b border-border-dim pb-4">
              Frameworks
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <FaVuejs className="text-aqua-glow" size={14} /> Vue.js
              </span>
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <FaReact className="text-aqua-glow" size={14} /> React.js
              </span>
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <FaNodeJs className="text-aqua-glow" size={14} /> Node.js
              </span>
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <SiExpress className="text-aqua-glow" size={14} /> Express.js
              </span>
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <SiTailwindcss className="text-aqua-glow" size={14} /> Tailwind
                CSS
              </span>
            </div>
          </div>

          {/* Card 3: Databases */}
          <div className="terminal-border surface-level-1 p-6 flex flex-col gap-6 hover:border-aqua-glow transition-colors duration-300">
            <h3 className="text-[13px] font-jetbrains-mono font-bold uppercase text-on-surface-variant border-b border-border-dim pb-4">
              Databases
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <SiMysql className="text-aqua-glow" size={14} /> MySQL
              </span>
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <SiPostgresql className="text-aqua-glow" size={14} /> PostgreSQL
              </span>
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <SiMongodb className="text-aqua-glow" size={14} /> MongoDB
              </span>
            </div>
          </div>

          {/* Card 4: Tools */}
          <div className="terminal-border surface-level-1 p-6 flex flex-col gap-6 hover:border-aqua-glow transition-colors duration-300">
            <h3 className="text-[13px] font-jetbrains-mono font-bold uppercase text-on-surface-variant border-b border-border-dim pb-4">
              Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <FaGitAlt className="text-aqua-glow" size={14} /> Git
              </span>
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <FaGithub className="text-aqua-glow" size={14} /> GitHub
              </span>
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <FaGitlab className="text-aqua-glow" size={14} /> GitLab
              </span>
              <span className="border border-border-dim text-[11px] font-jetbrains-mono tracking-widest uppercase px-3 py-1.5 flex items-center gap-2 text-on-background hover:bg-level-2 transition-colors cursor-default">
                <SiPostman className="text-aqua-glow" size={14} /> Postman
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
