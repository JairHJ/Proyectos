// src/screens/InformationScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InformationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información</Text>
      <Text style={styles.content}>
        Esta plataforma proporciona información sobre desastres naturales como huracanes, terremotos y tsunamis.
        Puedes acceder a las predicciones y alertas más recientes para tomar decisiones informadas.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
});

export default InformationScreen;
