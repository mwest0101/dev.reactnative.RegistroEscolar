import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Boton from "../../components/boton";

const HomeS = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Encabezado Home</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Menu</Text>
        <Boton
          text="Ir a Screen One"
          apretame={() => navigation.navigate("ScreenOne")}
        ></Boton>
        <Boton
          text="Ir a Screen Two"
          apretame={() => navigation.navigate("ScreenTwo")}
        ></Boton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ACC",
  },
  header: {
    flex: 0.2,
    backgroundColor: "#FCC",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 0.8,
    backgroundColor: "#FFF",
    padding: 20,
  },
  contentText: {
    fontSize: 18,
  },
});

export default HomeS;
