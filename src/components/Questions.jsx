import { SinqleQuestion } from "./SingleQuestion.jsx";
import { useQuestions } from "../hooks/useQuestions.js";
import { Looser } from "./Looser.jsx";

export function Questions() {
  const { game, allQuestions, handlerQuestionSelected, restartGame } =
    useQuestions();

  return (
    <section className="flex flex-col justify-center content-center w-full grow">
      {game.isLooser ? (
        <Looser onClick={restartGame} />
      ) : (
        <ul className="flex flex-col justify-center items-center gap-3">
          {allQuestions.length > 0 ? (
            allQuestions.map((singleQuestion) => {
              const { id, question, keyWord } = singleQuestion;

              return (
                <SinqleQuestion
                  key={id}
                  question={question}
                  id={id}
                  onClick={() =>
                    handlerQuestionSelected({ id, keyWord, question })
                  }
                />
              );
            })
          ) : (
            <li>You Lost!. There is no more questions left</li>
          )}
        </ul>
      )}
    </section>
  );
}
