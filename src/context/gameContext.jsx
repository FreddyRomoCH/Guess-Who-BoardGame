import { createContext, useState } from "react";
import { characters } from "../services/characters";

//Create
export const GameContext = createContext();

//Provide
export function GameProvider({ children }) {
  const shuffledCharacters = characters.sort(() => Math.random() - 0.5);
  const randomIndex = Math.floor(Math.random() * characters.length);

  const [game, setGame] = useState({
    characterToFind: randomIndex,
    isWinner: false,
    isLooser: false,
    oportunities: 5,
    board: shuffledCharacters,
  });

  return (
    <GameContext.Provider
      value={{
        game,
        setGame,
        shuffledCharacters,
        randomIndex,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
