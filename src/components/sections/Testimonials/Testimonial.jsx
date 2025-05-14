import { motion } from "motion/react";
import Star from "../../icons/Star";

export default function Testimonial({ test }) {
  return (
    <motion.li
      className="bg-primary-1300 rounded-2xl py-10 px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "100%" }}
      transition={{
        opacity: { duration: 0.75, ease: "easeInOut" },
      }}
    >
      <div className="mb-16">
        <div className="h-11 flex items-center gap-1">
          {Array.from({ length: test.rating }).map((_, i) => (
            <Star className="fill-primary-100 w-6 h-6" key={i} />
          ))}
          {Array.from({ length: 5 - test.rating }).map((_, i) => (
            <Star className="w-6 h-6" key={i} />
          ))}
        </div>
        <p className="mt-8 text-primary-50 text-lg/loose font-light">
          {test.description}
        </p>
      </div>
      <div className="flex items-center gap-6">
        <img
          className="w-18 h-18 rounded-full"
          src={test.src}
          alt="Portrait Headshot"
        />
        <div>
          <p className="text-primary-300 text-xl/7 font-bold tracking-tight">
            {test.name}
          </p>
          <p className="text-primary-75 text-base/loose font-normal tracking-tight">
            {test.title}
          </p>
        </div>
      </div>
    </motion.li>
  );
}
