import { useState } from "react";
import { frequentlyAskedQuestions } from "../../../utils/content";
import FAQList from "./FAQList";

export default function FAQs() {
  const [category, setCategory] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const categoryObj = frequentlyAskedQuestions
    .filter((obj) => obj.category === category)
    .at(0);
  const QuestionsArr = categoryObj.questions;

  const handleQuestionClick = (id) => {
    id === activeQuestion ? setActiveQuestion(null) : setActiveQuestion(id);
  };

  const handleCategoryClick = (category) => {
    setActiveQuestion(null);
    setCategory(category);
  };

  return (
    <section className="bg-gradient-to-bottom text-primary-50 mb-40">
      <div className="mx-auto w-full max-w-[90rem] px-25 py-32">
        <h2 className="text-6xl/18 font-semibold tracking-tighter text-center mb-8">
          Frequently Asked Questions
        </h2>
        <p className="text-primary-100 text-xl/loose font-light text-center">
          The most commonly asked questions about NoteFlow. <br />
          Have any other questions?{" "}
          <a className="underline underline-offset-2 underlin" href="#">
            Chat with our expert tech team
          </a>
        </p>
        <ul className="flex gap-x-3 gap-y-4 justify-center mt-8 mb-16 flex-wrap">
          {frequentlyAskedQuestions.map((obj) => {
            return (
              <li key={obj.id}>
                <button
                  className={`${
                    category === obj.category
                      ? "border-primary-500 bg-primary-500 text-primary-1300"
                      : "border-primary-50 hover:bg-primary-50"
                  }  hover:text-primary-1300 box-border cursor-pointer border-2 px-8 py-4 rounded-full text-lg/8 transition-properties primary-glow-hover font-normal`}
                  onClick={() => handleCategoryClick(obj.category)}
                >
                  {obj.category}
                </button>
              </li>
            );
          })}
        </ul>
        <FAQList
          category={category}
          questions={QuestionsArr}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      </div>
    </section>
  );
}
