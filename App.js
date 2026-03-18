import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        {/* Cada hijo de Stack.Navigator representa una pantalla */}
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Inicio" component={Inicio} />

          <Stack.Screen name="Nosotros" component={Nosotros} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
