import { logos } from "../../utils/content";

export default function Logos() {
  return (
    <section className="bg-gradient-to-top">
      <div className="mx-auto max-w-[90rem] px-25 py-28">
        <p className="text-primary-50 text-xl/loose font-light m-auto mb-20 text-center">
          Organizations powered by <span className="font-bold">NoteFlow</span>
        </p>
        <div className="flex flex-col gap-y-16">
          <ul className="flex flex-wrap justify-between">
            {logos.slice(0, 4).map((logo) => {
              return (
                <li key={logo.id}>
                  <img className="h-10" src={logo.src} alt={logo.alt} />
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-wrap justify-between">
            {logos.slice(4).map((logo) => {
              return (
                <li key={logo.id}>
                  <img className="h-10" src={logo.src} alt={logo.alt} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
