import { motion } from "motion/react";
import CaretUp from "../../icons/CaretUp";

export default function FAQ({
  questions,
  activeQuestion,
  handleQuestionClick,
}) {
  const itemVarients = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.li variants={itemVarients} className="shrink-0 grow-0">
      <button
        className="w-full flex cursor-pointer items-center"
        onClick={() => handleQuestionClick(questions.id)}
      >
        <div className="border-primary-50 mr-6 border-2 rounded-xl p-3.5">
          <questions.Icon
            width={2}
            className="stroke-primary-50"
            alt={questions.alt}
          />
        </div>
        <p className="text-primary-50 font-medium text-xl/loose tracking-tight">
          {questions.question}
        </p>
        <div className="ml-auto p-4 h-12 w-12 shrink-0">
          <CaretUp
            width={2.5}
            className={`stroke-primary-50 transition-properties`}
            activeQuestion={activeQuestion === questions.id}
            alt="caret up icon"
          />
        </div>
      </button>

      <motion.p
        className="text-primary-100 text-lg/8 font-light pr-14 pl-20"
        initial={{ opacity: 0, maxHeight: 0, visibility: "hidden" }}
        animate={
          activeQuestion === questions.id
            ? {
                opacity: 1,
                maxHeight: "300px",
                visibility: "visible",
                paddingTop: "1rem",
              }
            : {}
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {questions.answer}
      </motion.p>
    </motion.li>
  );
}
