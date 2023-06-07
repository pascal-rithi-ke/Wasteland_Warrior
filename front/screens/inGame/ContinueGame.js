import { View, Text, StyleSheet, Button } from 'react-native';

function ContinueGame() {
    return (
        <View style={styles.container}>
            <Text>ContinueGame</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
});

export default ContinueGame;