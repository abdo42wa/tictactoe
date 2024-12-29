import { Pressable, Text, View } from "react-native"
import { styles } from "../style"
import { TScoreBoardProps } from "../types"

export const ScoreBoard = ({ scores, onReset }: TScoreBoardProps) => {
    return (
        <View style={styles.scoreBoard}>
            <View style={styles.scoreContainer}>
                <View style={styles.scoreItem}>
                    <Text style={styles.scoreLabel}>Player X</Text>
                    <Text style={styles.scoreValue}>{scores.cross}</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={styles.scoreLabel}>Draws</Text>
                    <Text style={styles.scoreValue}>{scores.draws}</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={styles.scoreLabel}>Player O</Text>
                    <Text style={styles.scoreValue}>{scores.circle}</Text>
                </View>
            </View>
            <Pressable
                style={styles.resetButton}
                onPress={onReset}
            >
                <Text style={styles.resetButtonText}>Reset Scores</Text>
            </Pressable>
        </View>
    )
}