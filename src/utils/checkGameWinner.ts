import { PropsWithChildren } from "react";

type ICheckGameWinnerProps = PropsWithChildren<{
    setGameWinner: any
    gameState: any[]
}>

export const checkGameWinner = ({ gameState, setGameWinner }: ICheckGameWinnerProps) => {
    if (
        gameState[0] === gameState[1] &&
        gameState[0] === gameState[2] &&
        gameState[0] !== 'empty'
    ) {
        setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
        gameState[3] !== 'empty' &&
        gameState[3] === gameState[4] &&
        gameState[4] === gameState[5]
    ) {
        setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
        gameState[6] !== 'empty' &&
        gameState[6] === gameState[7] &&
        gameState[7] === gameState[8]
    ) {
        setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
        gameState[0] !== 'empty' &&
        gameState[0] === gameState[3] &&
        gameState[3] === gameState[6]
    ) {
        setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
        gameState[1] !== 'empty' &&
        gameState[1] === gameState[4] &&
        gameState[4] === gameState[7]
    ) {
        setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
        gameState[2] !== 'empty' &&
        gameState[2] === gameState[5] &&
        gameState[5] === gameState[8]
    ) {
        setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
        gameState[0] !== 'empty' &&
        gameState[0] === gameState[4] &&
        gameState[4] === gameState[8]
    ) {
        setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
        gameState[2] !== 'empty' &&
        gameState[2] === gameState[4] &&
        gameState[4] === gameState[6]
    ) {
        setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
        setGameWinner('Draw game... ⌛️');
    }
}