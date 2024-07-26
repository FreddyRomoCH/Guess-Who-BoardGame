import { Card } from "../components/Card.jsx";
import { useCharacters } from "../hooks/useCharacters.js";

export function CharacterToFind() {
  const { game } = useCharacters();
  console.log("Character To find Render");

  return (
    <>
      {game.board.map((character) => {
        const { id, name, image } = character;

        return (
          id === game.characterToFind && (
            <Card key={id} name={name} image={image} />
          )
        );
      })}
    </>
  );
}
