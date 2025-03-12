import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Crear el navegador de pila
const Stack = createStackNavigator();

// Pantalla principal (Home)
function HomeScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = new Animated.Value(menuVisible ? 0 : 300);

  // Función para abrir/cerrar el menú
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(slideAnim, {
      toValue: menuVisible ? 300 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    setMenuVisible(false);
    Animated.timing(slideAnim, {
      toValue: 300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Barra superior */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Alertas</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <FontAwesome5 name="bars" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Buscador */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Buscar..." style={styles.searchInput} />
        <FontAwesome5 name="search" size={20} color="gray" />
      </View>

      {/* Lista de alertas */}
      <ScrollView style={styles.alertList}>
        <AlertItem color="#FF6B6B" text="Peligro Alto" icon="exclamation-circle" />
        <AlertItem color="#FFA07A" text="Probabilidad de Aparición" icon="exclamation-circle" />
        <AlertItem color="#FFA07A" text="Probabilidad de Aparición" icon="exclamation-circle" />
        <AlertItem color="#7DCE82" text="Sin riesgo" icon="check-circle" />
        <AlertItem color="#7DCE82" text="Sin riesgo" icon="check-circle" />
      </ScrollView>

      {/* Menú lateral deslizante */}
      <Animated.View style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}>
        <Text style={styles.menuTitle}>Menú</Text>
        <MenuButton
          text="Huracanes"
          icon="cloud-showers-heavy"
          onPress={() => navigation.navigate('Huracanes')} // Navegar a la pantalla de huracanes
        />
        <MenuButton text="Terremotos" icon="home" />
        <MenuButton text="Tsunamis" icon="wave-square" />
      </Animated.View>

      {/* Ícono de "X" para cerrar el menú */}
      {menuVisible && (
        <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
          <FontAwesome5 name="times" size={30} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}

// Pantalla de información sobre huracanes
function HuracanesScreen() {
  return (
    <ScrollView style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Huracanes</Text>
      <Text style={styles.infoText}>
        Los huracanes son tormentas tropicales con vientos intensos y lluvias torrenciales. Se clasifican según la Escala de Saffir-Simpson.
      </Text>
      <Text style={styles.infoSubtitle}>Intensidad leve (Categoría 1 - 2)</Text>
      <Text style={styles.infoText}>
        Vientos: 119-153 km/h (Categoría 1) y 154-177 km/h (Categoría 2).
      </Text>
      <Text style={styles.infoText}>
        Daños:
        - Categoría 1: Daños menores a techos, árboles y letreros.
        - Categoría 2: Daños considerables a techos, ventanas y árboles.
      </Text>
      <Text style={styles.infoText}>
        Recomendaciones:
        - Asegura objetos sueltos en el exterior.
        - Prepárate para cortes de energía y posibles inundaciones.
      </Text>
      <Text style={styles.infoSubtitle}>Intensidad fuerte (Categoría 3 - 5)</Text>
      <Text style={styles.infoText}>
        Vientos: 178-208 km/h (Categoría 3), 209-251 km/h (Categoría 4), y más de 252 km/h (Categoría 5).
      </Text>
      <Text style={styles.infoText}>
        Daños:
        - Categoría 3: Daños estructurales a edificios pequeños, inundaciones extensas.
        - Categoría 4 y 5: Destrucción catastrófica de edificios, inundaciones severas.
      </Text>
      <Text style={styles.infoText}>
        Recomendaciones:
        - Evacúa si vives en zonas costeras o de alto riesgo.
        - Refúgiate en un lugar seguro y resistente, lejos de ventanas.
      </Text>
      <Text style={styles.infoSubtitle}>Consejos generales para todos los fenómenos:</Text>
      <Text style={styles.infoText}>
        Preparación:
        - Ten un kit de emergencia con agua, alimentos no perecederos, medicamentos, linternas y baterías.
        - Conoce las rutas de evacuación y los refugios más cercanos.
      </Text>
      <Text style={styles.infoText}>
        Durante el evento:
        - Mantén la calma y sigue las instrucciones de las autoridades.
        - Evita salir al exterior hasta que sea seguro.
      </Text>
      <Text style={styles.infoText}>
        Después del evento:
        - Ten cuidado con los escombros y los cables eléctricos caídos.
        - No uses agua estancada, ya que puede estar contaminada.
      </Text>
    </ScrollView>
  );
}

// Componente de alerta
const AlertItem = ({ color, text, icon }) => (
  <View style={[styles.alertItem, { backgroundColor: color }]}>
    <Text style={styles.alertText}>Lugar del fenómeno</Text>
    <Text style={styles.alertText}>{text}</Text>
    <FontAwesome5 name={icon} size={24} color="white" />
  </View>
);

// Componente de botón de menú
const MenuButton = ({ text, icon, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.menuButton}>
    <FontAwesome5 name={icon} size={20} color="white" />
    <Text style={styles.menuButtonText}>{text}</Text>
  </TouchableOpacity>
);

// Estilos
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '100%',
  },
  headerText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  menuButton: {
    position: 'absolute',
    right: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchInput: { flex: 1, fontSize: 16 },
  alertList: { flex: 1, marginHorizontal: 10 },
  alertItem: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alertText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  sideMenu: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50%',
    height: '100%',
    backgroundColor: '#2196F3',
    padding: 20,
    justifyContent: 'center',
  },
  menuTitle: { color: 'white', fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  menuButton: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  menuButtonText: { color: 'white', fontSize: 16, marginLeft: 10 },
  closeButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 50,
  },
  infoContainer: { flex: 1, padding: 20 },
  infoTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  infoSubtitle: { fontSize: 20, fontWeight: 'bold', marginTop: 15, marginBottom: 10 },
  infoText: { fontSize: 16, marginBottom: 10 },
});

// Exportar la aplicación con navegación
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Huracanes" component={HuracanesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
