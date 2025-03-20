import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';  // Asegúrate de que la ruta sea correcta
import PredictionsScreen from './screens/PredictionsScreen';  // Asegúrate de tener esta pantalla
import AlertsScreen from './screens/AlertsScreen';  // Asegúrate de tener esta pantalla
import NewsScreen from './screens/NewsScreen';  // Asegúrate de tener esta pantalla
import HelpScreen from './screens/HelpScreen';
import InformationScreen from './screens/InformationScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Predictions" component={PredictionsScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Alerts" component={AlertsScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Information" component={InformationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
