import Testimonial from "./Testimonial";

export default function TestimonialsList({ testimonials }) {
  return (
    <ul className="flex flex-col gap-y-6">
      {testimonials.map((test) => {
        return <Testimonial key={test.name} test={test} />;
      })}
    </ul>
  );
}
