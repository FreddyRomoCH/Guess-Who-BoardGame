import { createContext, useState } from "react";
import { characters } from "../services/characters";
import { questions } from "../services/questions";

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
    isLoser: false,
    opportunities: 5,
    difficulty: 5,
    board: characters,
    isPlaying: false,
    allQuestions: questions,
    currentQuestion: null,
    currentQuestionKeyWord: null,
    isCurrentAnswerTrue: false,
    currentQuestionOppositeWord: [],
  });

  const restartGame = () => {
    setGame((prevState) => ({
      ...prevState,
      characterToFind: randomIndex,
      isWinner: false,
      isLoser: false,
      opportunities: game.difficulty === 7 ? 7 : game.difficulty === 5 ? 5 : 3,
      difficulty: prevState.difficulty,
      board: characters,
      isPlaying: false,
      allQuestions: questions,
      currentQuestion: null,
      currentQuestionKeyWord: null,
      isCurrentAnswerTrue: false,
      currentQuestionOppositeWord: [],
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
