import { GAME_SYMBOLS, type TCheckGameWinnerProps } from "../types";

const WINNING_COMBINATIONS = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal
    [2, 4, 6]  // Diagonal
] as const;

export const checkGameWinner = ({ gameState, setGameWinner, updateScores }: TCheckGameWinnerProps) => {
    for (const [a, b, c] of WINNING_COMBINATIONS) {
        if (
            gameState[a] !== GAME_SYMBOLS.EMPTY &&
            gameState[a] === gameState[b] &&
            gameState[a] === gameState[c]
        ) {
            setGameWinner(`${gameState[a]} won the game! 🥳`);
            updateScores?.(gameState[a] as GAME_SYMBOLS.CROSS | GAME_SYMBOLS.CIRCLE);
            return;
        }
    }

    if (!gameState.includes(GAME_SYMBOLS.EMPTY)) {
        setGameWinner('Draw game... ⌛️');
        updateScores?.('draws');
        return;
    }
}