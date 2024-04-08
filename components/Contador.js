import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Boton from "./boton";

export default function Contador({navigation}) {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    const nuevoValor = contador + 1;
    setContador(nuevoValor);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHolaMundo}>Hola Mundo! Creamos un contador</Text>
      <Text style={styles.textContador}>{contador}</Text>
      <Boton
        apretame={aumentarContador}
        text={"Aumentar a " + (contador + 1)}
      />
      <Boton text="Ir a Contador2" apretame={()=>navigation.navigate("Contador2")}></Boton>
    </View>
  );
}

const styles = StyleSheet.create({
  textHolaMundo: {
    fontSize: 20,
  },
  textContador: {
    fontSize: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
