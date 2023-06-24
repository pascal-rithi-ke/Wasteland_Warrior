import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Home screen - main menu
import HomeScreen from './screens/HomeScreen';
import Regles from './screens/Regles';

// User screens
import Create_User from './screens/User/Create_User';
import Login from './screens/User/Login';

// inGame screens - Game
import Synopsis from './screens/inGame/Synopsis';

import GameScreen from './screens/inGame/GameScreen';
import Choix_Hero from './screens/inGame/Choix_Hero';
import Caracteristiques from './screens/inGame/Caracteristiques';

import ContinueGame from './screens/inGame/ContinueGame';
import Start_Game from './screens/inGame/Start_Game';

import Second_Choice from './screens/inGame/Second_Choice';
import Third_Choice from './screens/inGame/Third_Choice';
import Dog_Friendly from './screens/inGame/Dog_Friendly';
import Fourth_Choice from './screens/inGame/Fourth_Choice';
import Fifth_Choice from './screens/inGame/Fifth_Choice';
import Sixth_Choice from './screens/inGame/Sixth_Choice';
import Epilogue_Win from './screens/inGame/Epilogue_Win';
import Epilogue_Death from './screens/inGame/Epilogue_Death';
import FightDog from './screens/inGame/FightDog';
import Fight from './screens/inGame/Fight';
import FightWithDog from './screens/inGame/FightWithDog';
import Reason from './screens/inGame/Reason';
import HelpWoman from './screens/inGame/HelpWoman';

import GameOver from './screens/inGame/GameOver';

// Histoire screens - Admin console
import Add_Histoire from './screens/Histoire/Form_Histoire/Add_Histoire';
import GetAllHistoire from './screens/Histoire/GetAllHistoire';
import GetHistoire from './screens/Histoire/GetHistoire';
import Update_Histoire from './screens/Histoire/Form_Histoire/Update_Histoire';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        {/* Home screen - main menu */}
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Règles" component={Regles} />

        {/* User screens */}
        <Stack.Screen name="Inscription" component={Create_User} options={{headerShown:false}} />
        <Stack.Screen name="Connexion" component={Login} options={{headerShown:false}} />

        {/* inGame screens - Game */}
        <Stack.Screen name="Synopsis" component={Synopsis} options={{headerShown:false}} />

        <Stack.Screen name="Game" component={GameScreen} options={{headerShown:false}} />
        <Stack.Screen name="Choix_Hero" component={Choix_Hero} options={{headerShown:false}} />
        <Stack.Screen name="Caracteristiques" component={Caracteristiques} options={{headerShown:false}} />
        
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
        <Stack.Screen name="FightDog" component={FightDog} options={{headerShown:false}} />
        <Stack.Screen name="Fight" component={Fight} options={{headerShown:false}} />
        <Stack.Screen name="FightWithDog" component={FightWithDog} options={{headerShown:false}} />
        <Stack.Screen name="Reason" component={Reason} options={{headerShown:false}} />
        <Stack.Screen name="HelpWoman" component={HelpWoman} options={{headerShown:false}} />
        
        <Stack.Screen name="GameOver" component={GameOver} options={{headerShown:false}} />

        {/* Histoire screens - Admin console */}
        <Stack.Screen name="Ajouter histoire" component={Add_Histoire}/>
        <Stack.Screen name="Modifier l'histoire" component={Update_Histoire}/>
        <Stack.Screen name="Toutes les histoires" component={GetAllHistoire} />
        <Stack.Screen name="Histoire" component={GetHistoire}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}