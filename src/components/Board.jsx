import { Card } from "./Card.jsx";
import { useCharacters } from "../hooks/useCharacters.js";
import { Winner } from "./Winner.jsx";
import { useRef } from "react";

export function Board() {
  const { game, setGame, shuffledCharacters, randomIndex } = useCharacters();
  const firstBoardRender = useRef(true);

  const checkIfWinner = ({ id }) => {
    if (id === game.characterToFind) {
      setGame((prevState) => {
        return {
          ...prevState,
          isWinner: true,
        };
      });
    }
  };

  const restartGame = () => {
    console.log("Restarting game");
    setGame((prevState) => ({
      ...prevState,
      board: shuffledCharacters,
      characterToFind: randomIndex,
      isWinner: false,
    }));
  };

  return (
    <>
      <section className="grid grid-cols-board gap-4 justify-items-center text-cente w-[60%]">
        {game.isWinner ? (
          <Winner onClick={restartGame} />
        ) : firstBoardRender.current ? (
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
        ) : (
          (firstBoardRender.current = false)
        )}
      </section>
    </>
  );
}
