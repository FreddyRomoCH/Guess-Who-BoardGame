import { useEffect, useState } from 'react'
import { characters } from '../services/characters'

export function useBoard() {
    const [newBoard, setNewBoard] = useState([])

    useEffect(() => {
        const newGame = characters.map((character) => character)

        setNewBoard(newGame)
    }, [setNewBoard])

    return newBoard
}