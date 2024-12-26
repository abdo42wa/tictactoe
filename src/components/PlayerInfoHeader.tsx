import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { styles } from '../style'


type IPlayerInfoHeaderProps = PropsWithChildren<{
    gameWinner: string,
    isCross: boolean
}>

export const PlayerInfoHeader = ({ gameWinner, isCross }: IPlayerInfoHeaderProps) => {
    return (
        <View>
            {gameWinner ? (
                <View style={[styles.playerInfo, styles.winnerInfo]}>
                    <Text style={styles.winnerTxt}>{gameWinner}</Text>
                </View>
            ) : (
                <View style={[styles.playerInfo, isCross ? styles.playerX : styles.playerO]}>
                    <Text style={styles.gameTurnTxt}>
                        Player {isCross ? 'X' : 'O'}'s Turn
                    </Text>
                </View>
            )}
        </View>
    )
}
