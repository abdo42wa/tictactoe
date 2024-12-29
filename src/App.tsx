import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import { styles } from './style';
import { PlayerInfoHeader } from './components/PlayerInfoHeader';
import { GridList } from './components/GridList';
import { useGameLogic } from './hooks/useGameLogic';
import { ScoreBoard } from './components/ScoreBoard';

export const App = (): React.JSX.Element => {
  const {
    isCross,
    gameWinner,
    gameState,
    handleMove,
    reloadGame,
    scores,
    resetScores
  } = useGameLogic()

  return (
    <SafeAreaView>
      <StatusBar />

      <PlayerInfoHeader gameWinner={gameWinner} isCross={isCross} />

      <ScoreBoard
        scores={scores}
        onReset={resetScores}
      />

      <GridList
        gameState={gameState}
        gameWinner={gameWinner}
        onMove={handleMove}
      />

      <Pressable style={styles.gameBtn}
        onPress={reloadGame}>
        <Text style={styles.gameBtnText}>
          {gameWinner ? 'Start a new game' : 'Reload the game'}
        </Text>
      </Pressable>

    </SafeAreaView>
  );
}
