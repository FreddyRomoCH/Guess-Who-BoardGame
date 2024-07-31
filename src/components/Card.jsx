import { useEffect, useState } from "react";
import { useBoard } from "../hooks/useBoard";

export function Card({ name, image, onClick, found, isToFind }) {
  const { game } = useBoard();
  const [isVisible, setIsIsVisible] = useState(game.isCurrentAnswerTrue);

  const isToFindClass = isToFind
    ? "w-20 md:w-[80px] border-2 md:border-[6px]"
    : "border-[5px] transform hover:scale-105 transition-transform ease-in-out cursor-pointer";

  const cardNotFound = "images/question.png";

  useEffect(() => {
    setIsIsVisible(true);
    const timerInvisible = setTimeout(() => {
      setIsIsVisible(false);
    }, 1500);

    return () => clearTimeout(timerInvisible);
  }, [game.currentQuestion]);

  const showAnswer = game.isCurrentAnswerTrue ? (
    <span>Yes! you right!!</span>
  ) : (
    <span>No! wrong!!</span>
  );

  return (
    <div
      className={`relative border-[#B12831] bg-gradient-to-b shadow-lg box-border ${isToFindClass} ${
        found ? "rotate-card" : ""
      }`}
      onClick={!found ? onClick : undefined}
    >
      <div className="bg-white">
        <picture>
          {!isToFind ? (
            <img
              src={!found ? image : cardNotFound}
              alt={name}
              className="w-[60px] md:w-[90px] h-[80px] md:h-[130px] object-cover"
            />
          ) : (
            <>
              <img
                src={game.isWinner || game.isLoser ? image : cardNotFound}
                alt={name}
              />
            </>
          )}
        </picture>
      </div>

      {isToFind && game.isPlaying && (
        <div
          className={`absolute top-3 left-16 z-20 opacity-0 transition-all ease-out duration-300 translate-x-0
            ${isVisible && "-translate-y-4 opacity-100"}`}
        >
          <p className="text-white text-xl bg-[#850E16] rounded-3xl p-4 border-2 border-black">
            {showAnswer}
          </p>
        </div>
      )}
    </div>
  );
}
