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

        {/* 
          Nota: si deseas que los estilos de una pantalla, como la de INICIO, se apliquen de manera global, puedes configurarlos aquí, sería ponerlos en: Stack.Navigator screenOptions 
        */}
        <Stack.Navigator
          initialRouteName="Inicio"
          // screenOptions={{
          //   headerTitleAlign: 'center',
          //   headerStyle: { backgroundColor: '#f4511e' },
          //   headerTintColor: '#fff',
          //   headerTitleStyle: { fontWeight: 'bold' },
          // }}
        >
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{
              title: 'Componente Principal',
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#f4511e' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          />

          <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            options={({ route }) => ({
              title: `Cliente ID: ${route.params.clienteId}`,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
