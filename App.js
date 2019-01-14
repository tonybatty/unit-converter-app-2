import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderWidth: 1 }}
          placeholder="Convert From:"
          onChangeText={text => this.setState({ text })}
          keyboardType="numeric"
          width="100%"
        />
        <Text style={{ padding: 10, fontSize: 42 }}>{this.state.text}</Text>
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
