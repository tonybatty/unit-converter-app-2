import React from "react";
import { StyleSheet, Text, TextInput, Picker, View } from "react-native";
import convert from "convert-units";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitType: "length",
      unitFromSelected: "Meter",
      unitToSelected: "Yard",
      unitsFrom: [],
      unitsTo: [],
      unitFromInput: "",
      unitToInput: ""
    };

    this.changeUnitType = this.changeUnitType.bind(this);
    this.getUnitFromInput = this.getUnitFromInput.bind(this);
  }

  changeUnitType(itemValue, itemIndex) {
    this.setState({
      unitType: itemValue,
      unitsFrom: convert().list(itemValue),
      unitsTo: convert().list(itemValue)
    });
  }

  getUnitFromInput(itemValue, itemIndex) {
    this.setState({
      unitFromInput: itemValue
    });
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
                this.changeUnitType(itemValue, itemIndex)
              }
            >
              {convert()
                .measures()
                .map(unitType => (
                  <Picker.Item
                    label={unitType}
                    value={unitType}
                    key={unitType}
                  />
                ))}
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
              defaultValue="1"
              keyboardType="numeric"
              onValueChange={(itemValue, itemIndex) =>
                this.getUnitFromInput(itemValue, itemIndex)
              }
            />
            <Picker
              selectedValue={this.state.unitsFromInput}
              style={{ height: 48, flex: 1, borderWidth: 1 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ unitsFromSelected: itemValue })
              }
            >
              {this.state.unitsFrom.map(unitType => (
                <Picker.Item
                  label={unitType.singular}
                  value={unitType.singular}
                  key={unitType.singular}
                />
              ))}
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
              selectedValue={this.state.unitsToInput}
              style={{ height: 48, flex: 1, borderWidth: 1 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ unitsToSelected: itemValue })
              }
            >
              {this.state.unitsTo.map(unitType => (
                <Picker.Item
                  label={unitType.singular}
                  value={unitType.singular}
                  key={unitType.singular}
                />
              ))}
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
    backgroundColor: "#f2f2f2"
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
