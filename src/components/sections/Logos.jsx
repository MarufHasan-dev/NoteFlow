import { logos } from "../../utils/content";

export default function Logos() {
  return (
    <section className="bg-gradient-to-top">
      <div className="mx-auto max-w-[90rem] px-25 py-28 max-xl:px-16 max-xl:py-24 max-lg:px-8">
        <p className="text-primary-50 text-xl/loose font-light m-auto mb-20 max-xl:mb-16 text-center max-xl:text-lg/loose">
          Organizations powered by <span className="font-bold">NoteFlow</span>
        </p>
        <div className="flex flex-col gap-y-16">
          <ul className="flex flex-wrap justify-between">
            {logos.slice(0, 4).map((logo) => {
              return (
                <li key={logo.id}>
                  <img
                    className="h-10 max-xl:h-8 max-lg:h-7"
                    src={logo.src}
                    alt={logo.alt}
                  />
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-wrap justify-between">
            {logos.slice(4).map((logo) => {
              return (
                <li key={logo.id}>
                  <img
                    className="h-10 max-xl:h-8 max-lg:h-7"
                    src={logo.src}
                    alt={logo.alt}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
