import { Card } from "../components/Card.jsx";
import { useBoard } from "../hooks/useBoard.js";

export function CharacterToFind() {
  const { game } = useBoard();

  return (
    <>
      {game.board.map((character) => {
        const { id, name, image } = character;

        return (
          id === game.characterToFind && (
            <Card key={id} name={name} image={image} isToFind={true} />
          )
        );
      })}
    </>
  );
}
