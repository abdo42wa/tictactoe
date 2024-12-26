import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style'
import { TPlayerInfoHeaderProps } from '../types'

export const PlayerInfoHeader = ({ gameWinner, isCross }: TPlayerInfoHeaderProps) => {
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
