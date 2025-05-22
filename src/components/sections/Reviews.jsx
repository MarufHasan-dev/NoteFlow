import { reviews } from "../../utils/content";

export default function Reviews() {
  return (
    <section className="mx-auto flex items-center gap-4 flex-wrap max-w-[90rem] px-25 max-xl:px-16 max-xl:gap-3 max-lg:px-8 max-lg:gap-2">
      <ul className="flex">
        {reviews.map((review) => {
          return (
            <li key={review.id} className="-ml-4 first:ml-0">
              <img
                className="w-12 h-12 border-2 border-primary-100 rounded-full max-xl:h-10 max-xl:w-10"
                src={review.src}
                alt={review.alt}
                key={review.id}
              />
            </li>
          );
        })}
      </ul>
      <p className="text-xl/loose font-light text-primary-100 max-lg:text-base/loose">
        Trusted by{" "}
        <span className="text-primary-500 font-bold tracking-tighter">
          12,653+
        </span>{" "}
        productivity junkies
      </p>
    </section>
  );
}
