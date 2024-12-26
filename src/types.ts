import { PropsWithChildren } from "react"

export enum GAME_SYMBOLS {
    EMPTY = 'empty',
    CROSS = 'cross',
    CIRCLE = 'circle',
}

export type GameState = (GAME_SYMBOLS)[]

export type TGridListProps = PropsWithChildren<{
    gameWinner?: string
    gameState: GameState,
    onMove: (position: number) => void
}>

export type TCheckGameWinnerProps = PropsWithChildren<{
    setGameWinner: React.Dispatch<React.SetStateAction<string>>
    gameState: GameState
}>

export type TPlayerInfoHeaderProps = PropsWithChildren<{
    gameWinner: string,
    isCross: boolean
}>

export type TIconProps = PropsWithChildren<{
    name: string
}>