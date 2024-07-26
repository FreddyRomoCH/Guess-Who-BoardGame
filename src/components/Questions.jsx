import { useEffect, useState } from "react";
import { SinqleQuestion } from "./SingleQuestion.jsx";
import { questions } from "../services/questions.js";
import { useCharacters } from "../hooks/useCharacters.js";
import { Looser } from "./Looser.jsx";

export function Questions() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const { game, setGame } = useCharacters();

  useEffect(() => {
    setAllQuestions(questions);
  }, []);

  useEffect(() => {
    if (currentQuestion !== null) {
      setAllQuestions((prevQuestions) =>
        prevQuestions.filter(({ id }) => id !== currentQuestion)
      );
    }
  }, [currentQuestion]);

  const CheckingTarget = ({ keyWord }) => {
    return game.board.some(
      (target) => target.id === game.characterToFind && target[keyWord] === true
    );
  };

  const handlerClick = ({ id, keyWord }) => {
    setCurrentQuestion(id);
    //Checking if the keyword is in the character to find

    const isQuestionCorrect = CheckingTarget({ keyWord });

    if (!isQuestionCorrect) {
      if (game.oportunities === 0) {
        console.log("You Lost!");
        setGame((prevState) => {
          return {
            ...prevState,
            isLooser: true,
          };
        });
        return;
      } else {
        console.log("wrong!");
        setGame((prevState) => {
          return {
            ...prevState,
            oportunities: prevState.oportunities - 1,
          };
        });
        return;
      }
    }

    if (isQuestionCorrect) {
      const filteredBoard = game.board.map((character) => {
        if (character[keyWord] !== true) {
          return {
            ...character,
            found: true,
          };
        }
        return character;
      });

      setGame((prevState) => {
        return {
          ...prevState,
          board: filteredBoard,
        };
      });

      const isOneLeft =
        filteredBoard.filter((character) => character.found === false)
          .length === 1;

      if (isOneLeft) {
        setGame((prevState) => {
          return {
            ...prevState,
            isWinner: true,
          };
        });
      }
    }
  };

  return (
    <section className="flex flex-col justify-start content-center">
      {game.isLooser ? (
        <Looser />
      ) : (
        <>
          <h2>Questions</h2>
          <strong>Yo have {game.oportunities} oportunities left</strong>
          <ul className="flex flex-col justify-start">
            {allQuestions.length > 0 ? (
              allQuestions.map((singleQuestion) => {
                const { id, question, keyWord } = singleQuestion;

                return (
                  <SinqleQuestion
                    key={id}
                    question={question}
                    id={id}
                    onClick={() => handlerClick({ id, keyWord, question })}
                  />
                );
              })
            ) : (
              <li>You Lost!. There is no more questions left</li>
            )}
          </ul>
        </>
      )}
    </section>
  );
}
