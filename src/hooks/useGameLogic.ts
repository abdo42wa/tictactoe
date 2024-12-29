import { useCallback, useEffect, useState } from "react"
import { BOARD_SIZE } from "../consts"
import { GAME_SYMBOLS, GameState, TGameScores } from "../types"
import { checkGameWinner } from "../utils/checkGameWinner"

export const useGameLogic = () => {
    const [isCross, setIsCross] = useState<boolean>(false)
    const [gameWinner, setGameWinner] = useState<string>('')
    const [gameState, setGameState] = useState<GameState>(new Array(9).fill(GAME_SYMBOLS.EMPTY))
    const [scores, setScores] = useState<TGameScores>({
        cross: 0,
        circle: 0,
        draws: 0
    });


    const updateScores = useCallback((winner: 'cross' | 'circle' | 'draws') => {
        setScores(prevScores => ({
            ...prevScores,
            [winner]: prevScores[winner] + 1
        }))
    }, [])

    const handleMove = useCallback((position: number) => {
        if (gameState[position] === GAME_SYMBOLS.EMPTY && !gameWinner) {
            const newGameState = [...gameState]
            newGameState[position] = isCross ? GAME_SYMBOLS.CROSS : GAME_SYMBOLS.CIRCLE
            setGameState(newGameState)
            setIsCross(!isCross)

            checkGameWinner({
                gameState: newGameState,
                setGameWinner,
                updateScores
            })
        }
    }, [gameState, isCross, gameWinner, updateScores])

    const resetScores = useCallback(() => {
        setScores({
            cross: 0,
            circle: 0,
            draws: 0
        })
    }, [])

    const reloadGame = useCallback(() => {
        setIsCross(false)
        setGameWinner('')
        setGameState(new Array(BOARD_SIZE).fill(GAME_SYMBOLS.EMPTY))
    }, [])

    return {
        isCross,
        gameWinner,
        gameState,
        scores,
        handleMove,
        reloadGame,
        resetScores
    }
}