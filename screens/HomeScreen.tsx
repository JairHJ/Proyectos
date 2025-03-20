// HomeScreen.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types"; // Importamos los tipos

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">; // Definimos el tipo de navegación

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Usamos el tipo aquí

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plataforma de Predicción</Text>
      <Text style={styles.subtitle}>Huracanes, Terremotos y Tsunamis</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Predictions")} // Navegamos a Predicciones
        >
          <Icon name="cloud-outline" size={30} color="#fff" />
          <Text style={styles.buttonText}>Ver Predicciones</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Alerts")} // Navegamos a Alertas
        >
          <Icon name="warning-outline" size={30} color="#fff" />
          <Text style={styles.buttonText}>Ver Alertas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("News")} // Navegamos a Noticias
        >
          <Icon name="help-circle-outline" size={30} color="#fff" />
          <Text style={styles.buttonText}>Ayuda</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Help")} // Navegar a la pantalla de Ayuda
        >
          <Icon name="help-circle-outline" size={30} color="#fff" />
          <Text style={styles.footerText}>Ayuda</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Information")} // Navegar a la pantalla de Información
        >
          <Icon name="information-circle-outline" size={30} color="#fff" />
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#ecf0f1",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#ecf0f1",
    marginBottom: 40,
    textAlign: "center",
    fontStyle: "italic",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#3498db",
    padding: 18,
    borderRadius: 12,
    width: "80%",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 12,
    fontWeight: "600",
    letterSpacing: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
    bottom: 30,
    paddingHorizontal: 20,
  },
  footerButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#34495e",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#ecf0f1",
    marginTop: 8,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default HomeScreen;
