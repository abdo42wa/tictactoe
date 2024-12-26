import { useCallback, useState } from "react"
import { BOARD_SIZE } from "../consts"
import { GAME_SYMBOLS, GameState } from "../types"
import { checkGameWinner } from "../utils/checkGameWinner"

export const useGameLogic = () => {
    const [isCross, setIsCross] = useState<boolean>(false)
    const [gameWinner, setGameWinner] = useState<string>('')
    const [gameState, setGameState] = useState<GameState>(new Array(9).fill(GAME_SYMBOLS.EMPTY))

    const handleMove = useCallback((position: number) => {
        if (gameState[position] === GAME_SYMBOLS.EMPTY && !gameWinner) {
            const newGameState = [...gameState]
            newGameState[position] = isCross ? GAME_SYMBOLS.CROSS : GAME_SYMBOLS.CIRCLE
            setGameState(newGameState)
            setIsCross(!isCross)

            checkGameWinner({ gameState, setGameWinner })
        }
    }, [gameState, isCross, gameWinner])

    const reloadGame = useCallback(() => {
        setIsCross(false)
        setGameWinner('')
        setGameState(new Array(BOARD_SIZE).fill(GAME_SYMBOLS.EMPTY))
    }, [])

    return {
        isCross,
        gameWinner,
        gameState,
        handleMove,
        reloadGame
    }
}