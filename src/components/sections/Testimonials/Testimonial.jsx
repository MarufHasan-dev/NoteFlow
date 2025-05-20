import { motion } from "motion/react";
import Star from "../../icons/Star";

export default function Testimonial({ test }) {
  return (
    <motion.li
      className="bg-primary-1300 rounded-2xl py-10 px-8 max-xl:px-7 max-xl:py-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "100%" }}
      transition={{
        opacity: { duration: 0.75, ease: "easeInOut" },
      }}
    >
      <div className="mb-16 max-xl:mb-10">
        <div className="h-11 flex items-center gap-1">
          {Array.from({ length: test.rating }).map((_, i) => (
            <Star className="fill-primary-100 w-6 h-6" key={i} />
          ))}
          {Array.from({ length: 5 - test.rating }).map((_, i) => (
            <Star className="w-6 h-6" key={i} />
          ))}
        </div>
        <p className="mt-8 max-xl:mt-4 text-primary-50 text-lg/loose font-light max-xl:text-base/loose">
          {test.description}
        </p>
      </div>
      <div className="flex items-center gap-6 max-xl:gap-x-4">
        <img
          className="w-18 h-18 rounded-full max-xl:h-16 max-xl:w-16"
          src={test.src}
          alt="Portrait Headshot"
        />
        <div>
          <p className="text-primary-300 text-xl/7 font-bold tracking-tight max-xl:text-lg/tight max-xl:font-semibold">
            {test.name}
          </p>
          <p className="text-primary-75 text-base/loose font-normal tracking-tight max-xl:text-sm/loose">
            {test.title}
          </p>
        </div>
      </div>
    </motion.li>
  );
}
