import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define los tipos de los parámetros de navegación
type RootStackParamList = {
  Details: {
    hurricaneData: {
      name: string;
      location: string;
      speed: number;
      forecast: string;
    };
  };
};

// Asegúrate de declarar los tipos del 'route'
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface Props {
  route: DetailsScreenRouteProp;
}

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { hurricaneData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{hurricaneData.name}</Text>
      <Text style={styles.text}>Ubicación: {hurricaneData.location}</Text>
      <Text style={styles.text}>Velocidad: {hurricaneData.speed} km/h</Text>
      <Text style={styles.text}>Pronóstico: {hurricaneData.forecast}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DetailsScreen;
