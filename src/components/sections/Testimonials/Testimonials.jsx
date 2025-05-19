import { useState } from "react";
import TestimonialsList from "./TestimonialsList";
import { testimonials as test } from "../../../utils/content";
import CaretUp from "../../icons/CaretUp";

export default function Testimonials() {
  const [expanded, setExpanded] = useState(true);

  const handleSeeMore = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <section className="bg-gradient-to-top text-primary-50">
      <div className="mx-auto max-w-[90rem] py-32 px-25 max-xl:px-16 max-xl:py-24">
        <div>
          <p className="text-base/loose font-normal text-primary-1300 text-center content-center primary-glow w-[133px] h-12 bg-primary-500 rounded-full mx-auto">
            Testimonials
          </p>
          <h2 className="text-primary-50 text-6xl/18 font-semibold tracking-tighter content-center text-center my-6">
            What our AI-powered <br />
            notetakers have to say
          </h2>
          <p className="max-w-[550px] text-primary-100 text-xl/loose font-light text-center content-center mx-auto">
            NoteFlow has helped 1000’s supercharge their productivity with
            cutting edge AI note taking tools
          </p>
        </div>
        <div className="py-20 grid grid-cols-3 gap-x-6">
          <TestimonialsList testimonials={test.slice(0, expanded ? 5 : 2)} />
          <TestimonialsList testimonials={test.slice(5, expanded ? 10 : 7)} />
          <TestimonialsList testimonials={test.slice(10, expanded ? 15 : 12)} />
        </div>
        <button
          className="flex justify-center items-center text-primary-50 group hover:text-primary-1300 hover:bg-primary-50 text-base/loose font-light py-3 px-6 border-2 border-primary-50 rounded-full mx-auto transition-properties cursor-pointer"
          onClick={() => handleSeeMore()}
        >
          {expanded ? "Show less" : "Show more"}
          <CaretUp
            width={2}
            className={`stroke-primary-50 w-6 h-6 ml-2.5 group-hover:stroke-primary-1300 transition-properties rotate-180 ${
              expanded && "rotate-360"
            }`}
            alt="caret up"
          />
        </button>
      </div>
    </section>
  );
}
