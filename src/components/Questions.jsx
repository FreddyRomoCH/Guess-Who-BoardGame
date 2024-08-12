import { SinqleQuestion } from "./SingleQuestion.jsx";
import { useQuestions } from "../hooks/useQuestions.js";

export function Questions() {
  const { game, handlerQuestionSelected } = useQuestions();

  return (
    <section className="flex flex-col justify-center content-center w-full grow">
      <ul className="flex flex-col justify-center items-center gap-3">
        {game.opportunities > 0 ? (
          game.allQuestions.map((singleQuestion) => {
            const { id, question, keyWord, oppositeKeyWord } = singleQuestion;

            return (
              <SinqleQuestion
                key={id}
                question={question}
                id={id}
                onClick={() =>
                  handlerQuestionSelected({
                    id,
                    keyWord,
                    question,
                    oppositeKeyWord,
                  })
                }
              />
            );
          })
        ) : (
          <li className="bgcursor-pointer rounded-3xl bg-[#850E16] text-white w-full text-center p-3 box-border border-2 border-black shadow-question text-xl">
            <p>Click on the character you think is the one.</p>
          </li>
        )}
      </ul>
    </section>
  );
}
