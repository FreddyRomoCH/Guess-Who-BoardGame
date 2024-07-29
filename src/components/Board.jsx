import { Card } from "./Card.jsx";
import { useBoard } from "../hooks/useBoard.js";
import { Winner } from "./Winner.jsx";

export function Board() {
  const { game, checkIfWinner, restartGame } = useBoard();

  return (
    <>
      <section className="grid grid-cols-board-md xl:grid-cols-board justify-items-center text-cente w-full xl:w-[90%] gap-1 xl:gap-2">
        {game.isWinner ? (
          <Winner onClick={restartGame} />
        ) : (
          game.board.map((character) => {
            const { id, name, image, found } = character;

            return (
              <Card
                key={id}
                name={name}
                image={image}
                onClick={() => checkIfWinner({ id })}
                found={found}
              />
            );
          })
        )}
      </section>
    </>
  );
}
