// NewsScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NewsScreen = () => {
  const newsData = [
    { id: '1', title: 'Huracán A se acerca a la costa este' },
    { id: '2', title: 'Fenómeno El Niño afecta el clima global' },
    { id: '3', title: 'Pronóstico de huracanes para el mes de septiembre' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimas Noticias</Text>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Text style={styles.newsTitle}>{item.title}</Text>
          </View>
        )}
      />
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
  newsItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  newsTitle: {
    fontSize: 18,
  },
});

export default NewsScreen;
