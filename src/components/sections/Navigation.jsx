import Logo from "../icons/Logo";
import { navigationLinks } from "../../utils/content.js";

export default function Navigation() {
  return (
    <nav className="text-primary-50 mx-auto flex h-16 w-full max-w-[90rem] items-center justify-between px-4 text-lg/8 font-light">
      <a className="flex items-center gap-3" href="#">
        <Logo className="h-6" width={5} />
        <p className="text-xl font-bold tracking-tight">NoteFlow</p>
      </a>
      <ul className="flex items-center gap-x-8">
        {navigationLinks.map((link) => {
          return (
            <li className="cursor-pointer" key={link.id}>
              <a
                className="hover:text-primary-500 transition-properties"
                href={link.href}
              >
                {link.link}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-x-3">
        <button className="border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 box-border cursor-pointer border-2 px-8 py-4 rounded-full text-lg/8 primary-glow-hover font-normal">
          Login
        </button>
        <button className="bg-primary-500 text- text-primary-1300 border-primary-500 transition-properties hover:bg-primary-50 hover:border-primary-50 box-border cursor-pointer border-2 px-8 py-4 rounded-full text-lg/8 font-normal primary-glow hover:primary-glow-hover">
          Get Started
        </button>
      </div>
    </nav>
  );
}
