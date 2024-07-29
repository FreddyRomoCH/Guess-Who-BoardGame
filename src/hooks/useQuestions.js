import { useState, useEffect } from "react";
import { useContext } from "react"
import { GameContext } from "../context/gameContext.jsx"
import { questions } from "../services/questions.js"

export function useQuestions() {
    const { game, setGame, restartGame } = useContext(GameContext)
    const [allQuestions, setAllQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);

    useEffect(() => {
      setAllQuestions(questions);
    }, [setAllQuestions]);
  
    useEffect(() => {
      if (currentQuestion !== null) {
        setAllQuestions((prevQuestions) =>
          prevQuestions.filter(({ id }) => id !== currentQuestion)
        );
      }
    }, [currentQuestion]);


    const checkingTarget = ({ keyWord }) => {
      return game.board.some(
        (target) => target.id === game.characterToFind && target[keyWord] === true
      );
    };
    
    const handlerQuestionSelected = ({ id, keyWord }) => {
      setCurrentQuestion(id);
  
      const isQuestionCorrect = checkingTarget({ keyWord });

      let filteredBoard
  
      if (!isQuestionCorrect) {
        // Cards with keyWord equal to the selected one will be marked as found (removed from the board)
        filteredBoard = game.board.map((character) => {
          if (character[keyWord] === true) {
            return {
              ...character,
              found: true,
            };
          }
          return character;
        });
      } else {
        filteredBoard = game.board.map((character) => {
          if (character[keyWord] !== true) {
            return {
              ...character,
              found: true,
            };
          }
          return character;
        });
      }

      const isOneLeft =
        filteredBoard.filter((character) => character.found === false)
          .length === 1;

      setGame((prevState) => {
        return {
          ...prevState,
          oportunities: prevState.oportunities - 1,
          isLooser: (prevState.oportunities - 1) === 0 ? true : false,
          board: filteredBoard,
          isWinner: isOneLeft,
        };
      });

      return;

    };

    useEffect(() => {
      if (game.isWinner || game.isLooser) {
        setCurrentQuestion(null);
        setAllQuestions(questions);
      }
    }, [game])

    return { game, allQuestions, handlerQuestionSelected, restartGame }
}