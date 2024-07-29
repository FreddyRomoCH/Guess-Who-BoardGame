import { useBoard } from "../hooks/useBoard";

export function Card({ name, image, onClick, found, isToFind }) {
  const { game } = useBoard();

  const isToFindClass = isToFind
    ? "w-[124px] border-[10px]"
    : "w-[100px] border-[5px] transform hover:scale-105 transition-transform ease-in-out cursor-pointer";

  const cardNotFound = "images/question.png";

  return (
    <div
      className={`relative border-[#B12831] bg-gradient-to-b shadow-lg box-border ${isToFindClass} ${
        found ? "rotate-card" : ""
      }`}
      onClick={onClick}
    >
      <div className="bg-white">
        <picture>
          {!isToFind ? (
            <img
              src={!found ? image : cardNotFound}
              alt={name}
              className="w-[90px] h-[130px] object-cover"
            />
          ) : (
            <img
              src={game.isWinner || game.isLooser ? image : cardNotFound}
              alt={name}
            />
          )}
        </picture>
      </div>
    </div>
  );
}
