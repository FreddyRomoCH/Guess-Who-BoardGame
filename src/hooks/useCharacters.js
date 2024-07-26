import { useEffect } from "react";
import { useContext } from "react"
import { GameContext } from "../context/gameContext.jsx"

export function useCharacters() {
    const { game, setGame, shuffledCharacters, randomIndex, isWinner } = useContext(GameContext)

    useEffect(() => {
        if (isWinner) {
            setGame((prevState) => ({
                ...prevState,
                board: shuffledCharacters,
            }));
        }
    }, [isWinner])
    

    return { game, setGame, shuffledCharacters, randomIndex, isWinner }
}