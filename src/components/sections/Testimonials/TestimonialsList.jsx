import Testimonial from "./Testimonial";

export default function TestimonialsList({ testimonials }) {
  return (
    <ul className="flex flex-col gap-y-6 max-xl:gap-y-4">
      {testimonials.map((test) => {
        return <Testimonial key={test.name} test={test} />;
      })}
    </ul>
  );
}
