import { useContext, useEffect } from 'react'
import { GameContext } from '../context/gameContext'

export function useBoard() {
  const { game, setGame, randomIndex, restartGame } = useContext(GameContext)

  const checkIfWinner = ({ id }) => {
    if (id === game.characterToFind) {
      setGame((prevState) => {
        return {
          ...prevState,
          isPlaying: false,
          isWinner: true
        };
      });
    }else{
      setGame((prevState) => {
        return {
          ...prevState,
          isPlaying: false,
          isLoser: true
        };
      });
    }
  };

  return { game, randomIndex, checkIfWinner, restartGame }
}