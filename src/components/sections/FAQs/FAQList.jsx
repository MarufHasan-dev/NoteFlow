import { motion } from "motion/react";
import FAQ from "./FAQ";
import { useState } from "react";

export default function FAQList({
  category,
  questions,
  activeQuestion,
  handleQuestionClick,
}) {
  const [inView, setInView] = useState(false);
  return (
    <motion.ul
      className="m-auto flex flex-col max-w-[51.625rem] w-full gap-y-14 max-lg:gap-y-10"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      key={category}
      layout
      variants={{
        hidden: { opacity: 0 },
        visible: {
          transition: {
            staggerChildren: 0.25,
            ease: "easeInOut",
          },
        },
      }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ once: true, amount: "100%" }}
    >
      {questions.map((questions) => {
        return (
          <FAQ
            key={questions.id}
            questions={questions}
            activeQuestion={activeQuestion}
            handleQuestionClick={handleQuestionClick}
          />
        );
      })}
    </motion.ul>
  );
}
