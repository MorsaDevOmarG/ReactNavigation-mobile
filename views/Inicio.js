import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Inicio = props => {
  console.log('props:', props);

  const { navigation } = props;
  console.log('navigation:', navigation);

  const visitarNosotros = () => {
    navigation.navigate('Nosotros');
  };

  return (
    <View style={styles.contenedor}>
      <Text>Inicio</Text>

      <Button title="Ir a Nosotros" onPress={() => visitarNosotros()} />
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

export default Inicio;
