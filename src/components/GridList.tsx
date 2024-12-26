import { View, FlatList, Pressable } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Icons } from './Icons'
import Snackbar from 'react-native-snackbar'
import { checkGameWinner } from '../utils/checkGameWinner'
import { styles } from '../style'

type IGridListProps = PropsWithChildren<{
    gameWinner: string
    gameState: any[],
    setIsCross: React.Dispatch<React.SetStateAction<boolean>>
    isCross: boolean,
    setGameWinner: any
}>

export const GridList = ({ gameWinner, gameState, setIsCross, isCross, setGameWinner }: IGridListProps) => {

    const onItemPress = (itemNumber: number) => {
        if (gameWinner) {
            return Snackbar.show({
                text: gameWinner,
                backgroundColor: '#000000',
                textColor: '#FFFFFF'
            })
        }

        if (gameState[itemNumber] === 'empty') {
            gameState[itemNumber] = isCross ? 'cross' : 'circle'
            setIsCross(!isCross)
        } else {
            return Snackbar.show({
                text: 'position is already filled',
                backgroundColor: '#ff0000',
                textColor: '#FFFFFF'
            })
        }
        checkGameWinner({ gameState, setGameWinner })
    }
    return (
        <View>
            <FlatList
                numColumns={3}
                data={gameState}
                style={styles.grid}
                renderItem={({ item, index }) => (
                    <Pressable
                        key={index}
                        style={styles.card}
                        onPress={() => onItemPress(index)}
                    >
                        <Icons name={item} />
                    </Pressable>
                )}
            />
        </View>
    )
}
