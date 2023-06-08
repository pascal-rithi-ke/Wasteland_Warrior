import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/inGame/GameScreen';
import ContinueGame from './screens/inGame/ContinueGame';
import Synopsis from './Synopsis';
import Choix_Hero from './Choix_Hero';
import Caracteristiques from './Caracteristiques';
import Create_User from './Create_User';
import Login from './Login';
import Delete_User from './Delete_User';

import Add_Histoire from './screens/Histoire/Form_Histoire/Add_Histoire';
import GetAllHistoire from './screens/Histoire/GetAllHistoire';
import GetHistoire from './screens/Histoire/GetHistoire';

import GameOver from './screens/inGame/GameOver';

import Regles from './screens/Regles';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Game" component={GameScreen} options={{headerShown:false}} />
        <Stack.Screen name="Synopsis" component={Synopsis} options={{headerShown:false}} />
        <Stack.Screen name="Choix_Hero" component={Choix_Hero} options={{headerShown:false}} />
        <Stack.Screen name="Caracteristiques" component={Caracteristiques} options={{headerShown:false}} />
        <Stack.Screen name="Create_User" component={Create_User} options={{headerShown:false}} />
        <Stack.Screen name="Delete_User" component={Delete_User} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="ContinueGame" component={ContinueGame} options={{headerShown:false}} />

        <Stack.Screen name="Add_Histoire" component={Add_Histoire} options={{headerShown:false}} />
        <Stack.Screen name="GetAllHistoire" component={GetAllHistoire} />
        <Stack.Screen name="GetHistoire" component={GetHistoire}/>

        {/* -- Ecran non affichable via bouton -- */}
        <Stack.Screen name="GameOver" component={GameOver} options={{headerShown:false}} />
        {/* ------------------------------------- */}

        <Stack.Screen name="Regles" component={Regles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}