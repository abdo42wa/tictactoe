import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    playerInfo: {
        height: 56,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 4,
        paddingVertical: 8,
        marginVertical: 12,
        marginHorizontal: 14,

        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
    },
    gameTurnTxt: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '600',
    },
    playerX: {
        backgroundColor: '#38CC77',
    },
    playerO: {
        backgroundColor: '#F7CD2E',
    },
    grid: {
        margin: 12,
    },
    card: {
        height: 100,
        width: '33.33%',

        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 1,
        borderColor: '#333',
    },
    winnerInfo: {
        borderRadius: 8,
        backgroundColor: '#38CC77',

        shadowOpacity: 0.1,
    },
    winnerTxt: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    gameBtn: {
        alignItems: 'center',

        padding: 10,
        borderRadius: 8,
        marginHorizontal: 36,
        backgroundColor: '#8D3DAF',
    },
    gameBtnText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '500',
    },
    scoreBoard: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginVertical: 20,
    },
    scoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
    },
    scoreItem: {
        alignItems: 'center',
    },
    scoreLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    scoreValue: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    resetButton: {
        backgroundColor: '#ff6b6b',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    resetButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});