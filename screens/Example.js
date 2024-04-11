import React from "react";
import { StyleSheet, View, Text,Button } from "react-native";
// import Boton from "../../components/boton";

const Example = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Example</Text>
      </View>
      <View style={styles.content}>
      
        <Button
  // onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
<Button
  // onPress={}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
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

export default Example;
