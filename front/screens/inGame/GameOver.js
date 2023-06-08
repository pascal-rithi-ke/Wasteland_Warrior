import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function GameOver(){
    const navigation = useNavigation();

    return(
        <View>
            <View style={styles.container}>
                <Image style={styles.imgGameOver} source={require('../../assets/game/game_over.jpg')} />
                <Text style={styles.playAgain} onPress={() => navigation.navigate('Home')}>
                    Rejouer
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13100b',
    },

    imgGameOver: {
        width: Dimensions.get('window').width * 0.8, // Par exemple, utilisez 80% de la largeur de l'écran
        height: Dimensions.get('window').height * 0.8, // Par exemple, utilisez 80% de la hauteur de l'écran
        resizeMode: 'contain',
    },

    playAgain: {
        backgroundColor: 'white',
        borderRadius: 30,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        textAlign: 'center',
        width: 250,
        marginBottom: 20,
    },
});

export default GameOver;