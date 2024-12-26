import { View, FlatList, Pressable } from 'react-native'
import React from 'react'
import { Icons } from './Icons'
import Snackbar from 'react-native-snackbar'
import { styles } from '../style'
import { TGridListProps } from '../types'
import { GRID_COLUMNS } from '../consts'

export const GridList = ({ gameWinner, gameState, onMove }: TGridListProps) => {

    const handlePress = (position: number) => {
        if (gameState[position] !== 'empty') {
            return Snackbar.show({
                text: 'Position is already filled',
                backgroundColor: '#ff0000',
                textColor: '#FFFFFF'
            })
        }

        if (gameWinner) {
            return Snackbar.show({
                text: gameWinner,
                backgroundColor: '#000000',
                textColor: '#FFFFFF'
            })
        }
        onMove(position)
    }
    return (
        <View>
            <FlatList
                numColumns={GRID_COLUMNS}
                data={gameState}
                style={styles.grid}
                renderItem={({ item, index }) => (
                    <Pressable
                        key={index}
                        style={styles.card}
                        onPress={() => handlePress(index)}
                        accessibilityLabel={`Game cell ${index + 1}, current value: ${item}`}
                        accessibilityRole="button"
                    >
                        <Icons name={item} />
                    </Pressable>
                )}
            />
        </View>
    )
}
