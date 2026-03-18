import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Nosotros = props => {
  console.log('props:', props);

  // Recibiendo informacion desde Inicio, se recibe en route.params
  const { navigation, route } = props;
  console.log('navigation:', navigation);
  console.log('route:', route);

  const volver = () => {
    // navigation.navigate('Inicio');

    // Esto vuelve a Inicio pero crea una nueva pantalla, no vuelve a la anterior
    // navigation.push('Inicio');

    // Esto siempre vuelve a la anterior
    navigation.goBack();
  };

  return (
    <View style={styles.contenedor}>
      {/* <Text>Nosotros</Text> */}
      <Text>Cliente ID: {route.params.clienteId}</Text>
      <Text>Total a Pagar: {route.params.totalPagar}</Text>

      <Button title="Volver" onPress={() => volver()} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Nosotros;
