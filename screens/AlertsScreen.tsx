import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AlertsScreen = () => {
  // Estado para la búsqueda
  const [searchQuery, setSearchQuery] = useState('');
  
  // Datos de ejemplo para las alertas
  const alerts = [
    { id: '1', location: 'Costa de Guerrero', hazardType: 'Huracán', level: 'Alto', probability: 'Alta' },
    { id: '2', location: 'Costa de Veracruz', hazardType: 'Terremoto', level: 'Medio', probability: 'Media' },
    { id: '3', location: 'Costa de Chiapas', hazardType: 'Tsunami', level: 'Bajo', probability: 'Baja' },
    { id: '4', location: 'Costa de Oaxaca', hazardType: 'Huracán', level: 'Alto', probability: 'Alta' },
    { id: '5', location: 'Costa de Jalisco', hazardType: 'Terremoto', level: 'Medio', probability: 'Media' },
  ];

  // Filtrar alertas basadas en la búsqueda
  const filteredAlerts = alerts.filter(alert => 
    alert.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Función para asignar color y ícono según el nivel de peligro
  const getAlertDetails = (level: string) => {
    switch(level) {
      case 'Alto':
        return { color: '#e74c3c', icon: 'alert-circle-outline' };  // Rojo y ícono de alerta
      case 'Medio':
        return { color: '#f39c12', icon: 'warning-outline' };  // Naranja y ícono de advertencia
      case 'Bajo':
        return { color: '#2ecc71', icon: 'checkmark-circle-outline' };  // Verde y palomita
      default:
        return { color: '#95a5a6', icon: 'shield-checkmark-outline' };  // Gris y escudo
    }
  };

  return (
    <View style={styles.container}>
      {/* Barra de búsqueda */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por ubicación..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      {/* Lista de alertas */}
      <FlatList
        data={filteredAlerts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const { color, icon } = getAlertDetails(item.level);
          return (
            <View style={[styles.card, { backgroundColor: color }]}>
              <View style={styles.cardContent}>
                <View style={styles.cardLeft}>
                  <Text style={styles.cardTitle}>{item.location}</Text>
                  <Text style={styles.hazardType}>{item.hazardType}</Text>
                  <Text style={styles.level}>Peligro: <Text style={{ fontWeight: 'bold' }}>{item.level}</Text></Text>
                  <Text style={styles.probability}>Probabilidad: {item.probability}</Text>
                </View>
                <Icon name={icon} size={30} color="#fff" style={styles.icon} />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  card: {
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    width: '100%',  // Card más delgada
    flexDirection: 'row',  // Aseguramos que el contenido se distribuya horizontalmente
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',  // Para distribuir los elementos horizontalmente
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',  // La tarjeta debe ocupar todo el ancho disponible
  },
  cardLeft: {
    flex: 1,  // Deja espacio suficiente para el ícono
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  hazardType: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  level: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  probability: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  icon: {
    marginLeft: 15,  // Deja espacio entre el texto y el ícono
  },
});

export default AlertsScreen;
