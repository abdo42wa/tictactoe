import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import { styles } from './style';
import { PlayerInfoHeader } from './components/PlayerInfoHeader';
import { GridList } from './components/GridList';

export const App = (): React.JSX.Element => {

  const [isCross, setIsCross] = useState<boolean>(false)
  const [gameWinner, setGameWinner] = useState<string>('')
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9))

  const reloadGame = () => {
    setIsCross(false)
    setGameWinner('')
    setGameState(new Array(9).fill('empty', 0, 9))
  }

  return (
    <SafeAreaView>
      <StatusBar />

      <PlayerInfoHeader gameWinner={gameWinner} isCross={isCross} />

      <GridList gameState={gameState} gameWinner={gameWinner} isCross={isCross} setGameWinner={setGameWinner} setIsCross={setIsCross} />

      <Pressable style={styles.gameBtn}
        onPress={reloadGame}>
        <Text style={styles.gameBtnText}>
          {gameWinner ? 'Start a new game' : 'Reload the game'}
        </Text>
      </Pressable>

    </SafeAreaView>
  );
}
