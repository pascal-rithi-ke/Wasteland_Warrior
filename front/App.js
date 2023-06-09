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
import Start_Game from './screens/inGame/Start_Game';
import Add_Histoire from './screens/Histoire/Form_Histoire/Add_Histoire';
import GetAllHistoire from './screens/Histoire/GetAllHistoire';
import GetHistoire from './screens/Histoire/GetHistoire';
import Second_Choice from './screens/inGame/Second_Choice';
import Third_Choice from './screens/inGame/Third_Choice';
import Dog_Friendly from './screens/inGame/Dog_Friendly';
import Fourth_Choice from './screens/inGame/Fourth_Choice';
import Fifth_Choice from './screens/inGame/Fifth_Choice';
import Sixth_Choice from './screens/inGame/Sixth_Choice';
import Epilogue_Win from './screens/inGame/Epilogue_Win';
import Epilogue_Death from './screens/inGame/Epilogue_Death';




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
        <Stack.Screen name="Start_Game" component={Start_Game} options={{headerShown:false}} />
        <Stack.Screen name="Second_Choice" component={Second_Choice} options={{headerShown:false}} />
        <Stack.Screen name="Third_Choice" component={Third_Choice} options={{headerShown:false}} />
        <Stack.Screen name="Dog_Friendly" component={Dog_Friendly} options={{headerShown:false}} />
        <Stack.Screen name="Fourth_Choice" component={Fourth_Choice} options={{headerShown:false}} />
        <Stack.Screen name="Fifth_Choice" component={Fifth_Choice} options={{headerShown:false}} />
        <Stack.Screen name="Sixth_Choice" component={Sixth_Choice} options={{headerShown:false}} />
        <Stack.Screen name="Epilogue_Win" component={Epilogue_Win} options={{headerShown:false}} />
        <Stack.Screen name="Epilogue_Death" component={Epilogue_Death} options={{headerShown:false}} />
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