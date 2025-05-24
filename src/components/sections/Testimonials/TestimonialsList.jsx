import Testimonial from "./Testimonial";

export default function TestimonialsList({ testimonials }) {
  return (
    <ul className="flex flex-col gap-y-6 max-xl:gap-y-4 max-lg:nth-[3]:hidden max-sm:nth-[2]:hidden">
      {testimonials.map((test) => {
        return <Testimonial key={test.name} test={test} />;
      })}
    </ul>
  );
}
