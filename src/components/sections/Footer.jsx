import Logo from "../icons/Logo";
import { footerCols } from "../../utils/content";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-bottom">
      <div className="flex justify-between place-items-start px-25 py-32 max-w-[90rem] mx-auto max-xl:px-16 max-xl:py-24 max-lg:grid max-lg:gap-x-8 max-lg:gap-y-18 max-lg:px-8 max-md:px-6 max-md:w-full max-sm:pb-14">
        <a href="#" className="flex gap-4 items-center pr-20">
          <Logo
            width={4.5}
            className="w-9.5 h-[25px] stroke-primary-500"
            alt="Noteflow logo icon"
          />
          <p className="text-primary-50 text-2xl/6 tracking-tight font-bold">
            NoteFlow
          </p>
        </a>
        <div className="grid grid-cols-[repeat(4,max-content)] max-w-[680px] w-full justify-between max-lg:gap-x-24 max-md:gap-x-16 gap-y-16 max-sm:grid-cols-2 max-sm:gap-y-12 max-sm:gap-x-8">
          {footerCols.map((col) => (
            <div key={col.id}>
              <p className="text-primary-50 font-semibold text-xl/loose mb-8">
                {col.category}
              </p>
              <ul className="flex flex-col gap-4">
                {col.links.map((link, i) => (
                  <li className="cursor-pointer group" key={i}>
                    <a
                      className="text-primary-50 text-lg/8 font-light transition-properties group-hover:text-primary-500 max-xl:text-base/loose"
                      href="#"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
