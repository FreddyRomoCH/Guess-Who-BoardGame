import { createContext, useState } from "react";
import { characters } from "../services/characters";

//Create
export const GameContext = createContext();

//Provide
export function GameProvider({ children }) {
  const randomNumber = Math.floor(Math.random() * (characters.length + 1));
  let randomIndex = randomNumber;
  if (randomNumber === 0) {
    randomIndex = 1;
  }

  const [game, setGame] = useState({
    characterToFind: randomIndex,
    isWinner: false,
    isLooser: false,
    oportunities: 5,
    board: characters,
  });

  const restartGame = () => {
    setGame((prevState) => ({
      ...prevState,
      characterToFind: randomIndex,
      isWinner: false,
      isLooser: false,
      oportunities: 5,
      board: characters,
    }));
  };

  return (
    <GameContext.Provider
      value={{
        game,
        setGame,
        randomIndex,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
