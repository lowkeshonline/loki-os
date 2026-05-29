import { BsGithub } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="h-16 bg-level-1 border-b border-border-dim relative z-40">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-16 min-h-full flex justify-between items-center">
        <div>
          <p className="text-[13px] font-jetbrains-mono text-on-background">
            <span className="text-aqua-glow font-bold cursor-pointer">
              $&nbsp;LOKESH.OS
            </span>
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <ul className="flex md:gap-x-8 text-[11px] uppercase tracking-widest font-jetbrains-mono font-bold text-on-surface-variant">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="#">PROJECTS</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="https://github.com"
            className="text-on-surface-variant hover:text-aqua-hover transition-colors flex items-center before:hidden"
          >
            <BsGithub size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}
