import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitsFrom: "",
      unitsTo: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderWidth: 1, width: "100%", padding: 10, margin: 10 }}
          placeholder="Convert From:"
          keyboardType="numeric"
        />
        <TextInput
          style={{ height: 40, borderWidth: 1, width: "100%", padding: 10, margin: 10 }}
          placeholder="Convert To:"
          keyboardType="numeric"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  }
});
