import { useEffect } from "react";
import { useQuestions } from "../hooks/useQuestions";

export function Tries() {
  const { game, setGame } = useQuestions();

  let oneOpportunityClass;

  if (game.opportunities > 2) {
    oneOpportunityClass = "text-green-500";
  } else if (game.opportunities <= 1) {
    oneOpportunityClass = "text-red-500";
  }

  const handleChangeDifficulty = (e) => {
    setGame((prevState) => {
      return {
        ...prevState,
        difficulty: Number(e.target.value),
      };
    });
  };

  useEffect(() => {
    setGame((prevState) => {
      return {
        ...prevState,
        opportunities: game.difficulty,
      };
    });
  }, [game.difficulty]);

  return (
    <div className="bg-black/50 text-white text-center rounded-lg p-6 mb-10">
      <h2 className="text-xl lg:text-3xl font-light tracking-wide mb-3">
        Ask a question to know the hidden character
      </h2>
      {game.allQuestions.length > 0 && (
        <p
          className={`font-thin text-base mb-2 lg:text-2xl ${oneOpportunityClass}`}
        >
          Questions: {game.opportunities}
        </p>
      )}

      <div className="flex flex-row justify-around items-center">
        <label htmlFor="easy">
          <input
            type="radio"
            id="easy"
            name="easy"
            value="7"
            onChange={handleChangeDifficulty}
            checked={game.difficulty === 7 && "checked"}
            className="hidden"
            disabled={game.isPlaying === true ? "disabled" : ""}
          />
          <span
            className={`w-4 h-4 inline-block mr-2 rounded-full border-2 border-gray-300 cursor-pointer ${
              game.difficulty === 7
                ? "bg-indigo-500 border-indigo-500 cursor-pointer"
                : ""
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
            checked={game.difficulty === 5 && "checked"}
            disabled={game.isPlaying === true ? "disabled" : ""}
          />
          <span
            className={`w-4 h-4 inline-block mr-2 rounded-full border-2 border-gray-300  cursor-pointer ${
              game.difficulty === 5 ? "bg-indigo-500 border-indigo-500" : ""
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
            checked={game.difficulty === 3 && "checked"}
            className="hidden"
            disabled={game.isPlaying === true ? "disabled" : ""}
          />
          <span
            className={`w-4 h-4 inline-block mr-2 rounded-full border-2 border-gray-300  cursor-pointer ${
              game.difficulty === 3 ? "bg-indigo-500 border-indigo-500" : ""
            }`}
          ></span>
          Hard
        </label>
      </div>
    </div>
  );
}
