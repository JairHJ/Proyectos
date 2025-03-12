// src/screens/HelpScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayuda</Text>
      <Text style={styles.content}>
        Aquí encontrarás información de cómo utilizar la plataforma y cómo interpretar las alertas y predicciones.
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

export default HelpScreen;
