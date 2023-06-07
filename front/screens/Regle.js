import {View, Text, StyleSheet, Button} from 'react-native';

function Regle(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Règles du jeu</Text>
            <Text style={styles.text}>Ajouter le sujet du projet ICI</Text>
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

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    text: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
    }
});
export default Regle;