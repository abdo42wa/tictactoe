import { GAME_SYMBOLS, type TCheckGameWinnerProps } from "../types";

export const checkGameWinner = ({ gameState, setGameWinner, updateScores }: TCheckGameWinnerProps) => {
    if (
        gameState[0] === gameState[1] &&
        gameState[0] === gameState[2] &&
        gameState[0] !== GAME_SYMBOLS.EMPTY
    ) {
        setGameWinner(`${gameState[0]} won the game! 🥳`);
        updateScores?.(gameState[0] as 'cross' | 'circle');
    } else if (
        gameState[3] !== GAME_SYMBOLS.EMPTY &&
        gameState[3] === gameState[4] &&
        gameState[4] === gameState[5]
    ) {
        setGameWinner(`${gameState[3]} won the game! 🥳`);
        updateScores?.(gameState[3] as 'cross' | 'circle');
    } else if (
        gameState[6] !== GAME_SYMBOLS.EMPTY &&
        gameState[6] === gameState[7] &&
        gameState[7] === gameState[8]
    ) {
        setGameWinner(`${gameState[6]} won the game! 🥳`);
        updateScores?.(gameState[6] as 'cross' | 'circle');
    } else if (
        gameState[0] !== GAME_SYMBOLS.EMPTY &&
        gameState[0] === gameState[3] &&
        gameState[3] === gameState[6]
    ) {
        setGameWinner(`${gameState[0]} won the game! 🥳`);
        updateScores?.(gameState[0] as 'cross' | 'circle');
    } else if (
        gameState[1] !== GAME_SYMBOLS.EMPTY &&
        gameState[1] === gameState[4] &&
        gameState[4] === gameState[7]
    ) {
        setGameWinner(`${gameState[1]} won the game! 🥳`);
        updateScores?.(gameState[1] as 'cross' | 'circle');
    } else if (
        gameState[2] !== GAME_SYMBOLS.EMPTY &&
        gameState[2] === gameState[5] &&
        gameState[5] === gameState[8]
    ) {
        setGameWinner(`${gameState[2]} won the game! 🥳`);
        updateScores?.(gameState[2] as 'cross' | 'circle');
    } else if (
        gameState[0] !== GAME_SYMBOLS.EMPTY &&
        gameState[0] === gameState[4] &&
        gameState[4] === gameState[8]
    ) {
        setGameWinner(`${gameState[0]} won the game! 🥳`);
        updateScores?.(gameState[0] as 'cross' | 'circle');
    } else if (
        gameState[2] !== GAME_SYMBOLS.EMPTY &&
        gameState[2] === gameState[4] &&
        gameState[4] === gameState[6]
    ) {
        setGameWinner(`${gameState[2]} won the game! 🥳`);
        updateScores?.(gameState[2] as 'cross' | 'circle');
    } else if (!gameState.includes(GAME_SYMBOLS.EMPTY, 0)) {
        setGameWinner('Draw game... ⌛️');
        updateScores?.('draws');
    }
}