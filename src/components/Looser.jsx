import { useBoard } from "../hooks/useBoard";

export function Looser({ onClick }) {
  const { game } = useBoard();

  const mainCard = game.board.filter((el) => {
    return el.id === game.characterToFind;
  });

  return (
    <div className="absolute grid justify-center items-center top-0 left-0 m-auto w-full h-full  bg-black/85">
      <div className="flex flex-col justify-center items-center bg-[#6C61F5] p-8 rounded gap-4">
        <h1 className="text-4xl text-center text-indigo-200">
          You Lost! Try Again!
        </h1>
        <picture>
          <img
            className="w-[100px] border-[5px] bg-white border-[#B12831]"
            src={mainCard[0].image}
            alt={mainCard[0].name}
          />
        </picture>
        <button
          className="bg-indigo-200 text-[#6C61F5] rounded p-3"
          onClick={onClick}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
