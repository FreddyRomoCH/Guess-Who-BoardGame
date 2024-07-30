import { useEffect, useState } from "react";
import { useQuestions } from "../hooks/useQuestions";

export function Tries() {
  const { game, setGame } = useQuestions();
  const [difficulty, setDifficulty] = useState(5);

  let oneOportunityClass;

  if (game.oportunities > 2) {
    oneOportunityClass = "text-green-500";
  } else if (game.oportunities <= 1) {
    oneOportunityClass = "text-red-500";
  }

  const handleChangeDifficulty = (e) => {
    setDifficulty(Number(e.target.value));
  };

  useEffect(() => {
    setGame((prevState) => {
      return {
        ...prevState,
        oportunities: difficulty,
      };
    });
  }, [difficulty, setDifficulty]);

  return (
    <div className="bg-black/50 text-white text-center rounded-lg p-6 mb-10">
      <h2 className="text-xl lg:text-3xl font-light tracking-wide mb-3">
        Ask a question or click a card
      </h2>
      <p
        className={`font-thin text-base mb-2 lg:text-2xl ${oneOportunityClass}`}
      >
        Tries: {game.oportunities}
      </p>
      <div className="flex flex-row justify-around items-center">
        <label htmlFor="easy">
          <input
            type="radio"
            id="easy"
            name="easy"
            value="7"
            onChange={handleChangeDifficulty}
            checked={difficulty === 7 && "checked"}
            className="hidden"
          />
          <span
            className={`w-4 h-4 inline-block mr-2 rounded-full border-2 border-gray-300 ${
              difficulty === 7 ? "bg-indigo-500 border-indigo-500" : ""
            }`}
          ></span>
          Easy
        </label>

        <label htmlFor="medium">
          <input
            type="radio"
            id="medium"
            name="medium"
            value="5"
            onChange={handleChangeDifficulty}
            className="hidden"
            checked={difficulty === 5 && "checked"}
          />
          <span
            className={`w-4 h-4 inline-block mr-2 rounded-full border-2 border-gray-300 ${
              difficulty === 5 ? "bg-indigo-500 border-indigo-500" : ""
            }`}
          ></span>
          Medium
        </label>
        <label htmlFor="hard">
          <input
            type="radio"
            id="hard"
            name="hard"
            value="3"
            onChange={handleChangeDifficulty}
            checked={difficulty === 3 && "checked"}
            className="hidden"
          />
          <span
            className={`w-4 h-4 inline-block mr-2 rounded-full border-2 border-gray-300 ${
              difficulty === 3 ? "bg-indigo-500 border-indigo-500" : ""
            }`}
          ></span>
          Hard
        </label>
      </div>
    </div>
  );
}
