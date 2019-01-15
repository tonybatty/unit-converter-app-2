import React from "react";
import { StyleSheet, Text, TextInput, Picker, View } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitType: "",
      unitInputFrom: "Meter",
      unitsInputTo: "Yard",
      unitsFrom: "",
      unitsTo: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.elementsContainer}>
        <View style={styles.inputGroup}>
            <Picker
              selectedValue={this.state.unitType}
              style={{ height: 50, flex: 1, borderWidth: 1 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ unitType: itemValue })
              }
            >
              <Picker.Item label="Length" value="Kilometre" />
              <Picker.Item label="Mass" value="Metre" />
              <Picker.Item label="Area" value="Centimetre" />
              <Picker.Item label="Volume" value="Millimetre" />
            </Picker>
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              style={{
                flex: 1,
                height: 48,
                borderWidth: 1,
                padding: 8,
                textAlign: "right"
              }}
              keyboardType="numeric"
            />
            <Picker
              selectedValue={this.state.unitsFrom}
              style={{ height: 48, flex: 1, borderWidth: 1 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ unitsFrom: itemValue })
              }
            >
              <Picker.Item label="Kilometre" value="Kilometre" />
              <Picker.Item label="Metre" value="Metre" />
              <Picker.Item label="Centimetre" value="Centimetre" />
              <Picker.Item label="Millimetre" value="Millimetre" />
            </Picker>
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              style={{
                flex: 1,
                height: 48,
                borderWidth: 1,
                padding: 8,
                textAlign: "right"
              }}
              keyboardType="numeric"
            />
            <Picker
              selectedValue={this.state.unitsTo}
              style={{ height: 48, flex: 1, borderWidth: 1 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ unitsTo: itemValue })
              }
            >
              <Picker.Item label="Kilometre" value="Kilometre" />
              <Picker.Item label="Metre" value="Metre" />
              <Picker.Item label="Centimetre" value="Centimetre" />
              <Picker.Item label="Millimetre" value="Millimetre" />
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  elementsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    marginTop: 24
  },
  inputGroup: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 12
  }
});
