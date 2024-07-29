import { useContext } from 'react'
import { GameContext } from '../context/gameContext'

export function useBoard() {
    const { game, setGame, randomIndex, restartGame } = useContext(GameContext)

    const checkIfWinner = ({ id }) => {
        if (id === game.characterToFind) {
          setGame((prevState) => {
            return {
              ...prevState,
              isWinner: true,
            };
          });
        }else{
            setGame((prevState) => {
              return {
                ...prevState,
                oportunities: prevState.oportunities - 1,
                isLooser: (prevState.oportunities - 1) === 0 ? true : false,
                board: prevState.board.map((character) => {
                  if (character.id === id) {
                    return {
                      ...character,
                      found: true,
                    };
                  }
                  return character;
                })
              }
            })
        }
      };

    return { game, randomIndex, checkIfWinner, restartGame }
}