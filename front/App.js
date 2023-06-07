import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/inGame/GameScreen';
import ContinueGame from './screens/inGame/ContinueGame';

import GameOver from './screens/inGame/GameOver';

import Regle from './screens/Regle';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Game" component={GameScreen} options={{headerShown:false}} />
        <Stack.Screen name="ContinueGame" component={ContinueGame} options={{headerShown:false}} />

        {/* -- Ecran non affichable via bouton -- */}
        <Stack.Screen name="GameOver" component={GameOver} options={{headerShown:false}} />
        {/* ------------------------------------- */}

        <Stack.Screen name="Regle" component={Regle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}