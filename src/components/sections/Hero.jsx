import ArrowRightLine from "../icons/ArrowRightLine";
import ArrowRight from "../icons/ArrowRight";
import HeroGraphic from "../../assets/graphics/HeroGraphic.webp";
import { useModalContext } from "../../context/ModalContext";

export default function Hero() {
  const { setActiveModal } = useModalContext();

  return (
    <section className="mx-auto grid max-w-[90rem] grid-cols-[5fr_4fr] max-xl:grid-cols-2 max-xl:gap-x-12 max-xl:px-16 max-xl:py-38 items-center gap-x-18 px-24 py-42">
      <div>
        <h1 className="text-primary-50 font-semibold text-6xl/18 tracking-tighter mb-6 max-xl:mb-4 max-xl:text-5xl/16">
          AI-Powered Notes. Organize and Summarize in Seconds
        </h1>
        <p className="text-primary-100 text-xl/loose font-light mb-10 max-xl:mb-8 max-xl:text-lg/8">
          Let AI organize & summarize your notes, <br />
          saving you time and boosting productivity
        </p>
        <button
          className="bg-primary-500 text- text-primary-1300 border-primary-500 transition-properties hover:bg-primary-50 hover:border-primary-50 box-border cursor-pointer border-2 px-8 py-4 max-xl:px-6 max-xl:py-3 rounded-full font-normal primary-glow hover:primary-glow-hover flex gap-x-3 max-xl:gap-x-2 items-center group"
          onClick={() => setActiveModal("sign-up")}
        >
          <p className="text-lg/8 max-xl:text-base/loose">Get Started</p>
          <div className="w-5 max-xl:w-4">
            <ArrowRightLine
              alt="arrow right line"
              className="stroke-primary-1300 transition-properties inline ease-in-out -mr-3 w-0 opacity-0 group-hover:opacity-100 group-hover:w-3"
            />
            <ArrowRight
              alt="arrow right icon"
              className="stroke-primary-1300 inline w-5 max-xl:w-4"
            />
          </div>
        </button>
      </div>
      <div className="relative">
        <div className="bg-primary-1300 absolute top-0 right-0 bottom-0 left-0 rounded-full blur-3xl" />
        <img
          className="relative max-h-[30rem] justify-self-end"
          src={HeroGraphic}
          alt="hero graphic showing note summarizer functionality"
        />
      </div>
    </section>
  );
}
