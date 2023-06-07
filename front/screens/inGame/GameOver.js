import {View, Text, Button} from 'react-native';

function GameOver(){
    return(
        <View>
            <Text>Game Over</Text>
            <Button title="Rejouer" onPress={() => navigation.navigate('Game')}/>
        </View>
    );
}
export default GameOver;