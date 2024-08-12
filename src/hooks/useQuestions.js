import { useEffect, useContext } from "react";
import { GameContext } from "../context/gameContext.jsx"

export function useQuestions() {
    const { game, setGame, restartGame } = useContext(GameContext)

    //Filter the questions based on the current question
    useEffect(() => {
      if (game.currentQuestion !== null && game.opportunities > 1) {
        setGame(prevState => ({
            ...prevState,
            allQuestions: game.allQuestions.filter(({ id, keyWord }) => {
              if (id === game.currentQuestion) return false;
              if (!game.currentQuestionKeyWord.includes("Hair") && game.currentQuestionOppositeWord.includes(keyWord)) return false; 
              if ( game.currentQuestionKeyWord.includes("Hair") && keyWord.includes("Hair")) return !game.isCurrentAnswerTrue;
              return true;
            })
        }))
      }

      //If there is only one opportunity left or two cards left, remove all questions
      const isLastTwoLeft = game.board.filter((character) => character.found === false).length === 2;

      if (game.opportunities < 1 || isLastTwoLeft) {
        setGame(prevState => {
          return {
            ...prevState,
            allQuestions: [],
            opportunities: 0,
          }
        })
      }

      //Scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

    }, [game.currentQuestion]);
    
    const handlerQuestionSelected = ({ id, keyWord, oppositeKeyWord }) => {

      const isQuestionCorrect = game.board.some((target) => target.id === game.characterToFind && target[keyWord] === true)

      const filteredBoard = game.board.map((character) => {
        if (isQuestionCorrect) {
          return character[keyWord] !== true ? { ...character, found: true } : character;
        }else{
          return character[keyWord] === true ? { ...character, found: true } : character;
        }
      })

      const isOneLeft = filteredBoard.filter((character) => character.found === false).length === 1;

      setGame((prevState) => {
        return {
          ...prevState,
          currentQuestion: id,
          currentQuestionKeyWord: keyWord,
          currentQuestionOppositeWord: oppositeKeyWord,
          isPlaying: true,
          opportunities: prevState.opportunities - 1,
          isLoser: (prevState.opportunities - 1) < 0 ? true : false,
          board: filteredBoard,
          isWinner: isOneLeft,
          isCurrentAnswerTrue: isQuestionCorrect
        };
      });
    };

    return { game, setGame, handlerQuestionSelected, restartGame }
}