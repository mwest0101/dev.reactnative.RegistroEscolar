import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Boton from "../../components/boton";

const ScreenTwoT = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Screen Two</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Menu</Text>
        <Boton
          text="Volver a Home"
          apretame={() => navigation.navigate("Home")}
        ></Boton>
        <Boton
          text="Volver a Screen One"
          apretame={() => navigation.navigate("ScreenOne")}
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
    backgroundColor: "#CCF",
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

export default ScreenTwoT;
