import React from "react";
import { StyleSheet, Text, TextInput, Picker, View } from "react-native";
import convert from "convert-units";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitType: "",
      unitFromSelected: "",
      unitToSelected: "",
      unitsFrom: [],
      unitsTo: [],
      unitFromInput: "",
      unitToInput: ""
    };

    this.changeUnitType = this.changeUnitType.bind(this);
    this.getUnitFromInput = this.getUnitFromInput.bind(this);
    this.getUnitToInput = this.getUnitToInput.bind(this);
  }

  componentDidMount() {
    this.setState({
      unitType: "length",
      unitFromSelected: "mm",
      unitToSelected: "cm",
      unitsFrom: convert().list("length"),
      unitsTo: convert().list("length"),
      unitFromInput: "1",
      unitToInput: "0"
    });
  }

  changeUnitType(itemValue, itemIndex) {
    this.setState({
      unitType: itemValue,
      unitsFrom: convert().list(itemValue),
      unitsTo: convert().list(itemValue),
      unitToInput: convert(Number(itemValue))
        .from(this.state.unitFromSelected)
        .to(this.state.unitToSelected)
    });
  }

  getUnitFromInput(itemValue, itemIndex) {
    this.setState({
      unitFromInput: parseFloat(itemValue),
      unitToInput: convert(Number(itemValue))
        .from(this.state.unitFromSelected)
        .to(this.state.unitToSelected)
    });
  }

  getUnitToInput(itemValue, itemIndex) {
    this.setState({
      unitToInput: parseFloat(itemValue),
      unitFromInput: convert(Number(itemValue))
        .from(this.state.unitToSelected)
        .to(this.state.unitFromSelected)
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
              value={String(this.state.unitFromInput)}
              onChangeText={(itemValue, itemIndex) =>
                this.getUnitFromInput(itemValue, itemIndex)
              }
            />
            <Picker
              selectedValue={this.state.unitFromSelected}
              style={{ height: 48, flex: 1, borderWidth: 1 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ unitFromSelected: itemValue })
              }
            >
              {this.state.unitsFrom.map(unitType => (
                <Picker.Item
                  label={unitType.singular}
                  value={unitType.abbr}
                  key={unitType.abbr}
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
              value={String(this.state.unitToInput)}
              onChangeText={(itemValue, itemIndex) =>
                this.getUnitToInput(itemValue, itemIndex)
              }
            />
            <Picker
              selectedValue={this.state.unitToSelected}
              style={{ height: 48, flex: 1, borderWidth: 1 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ unitToSelected: itemValue })
              }
            >
              {this.state.unitsTo.map(unitType => (
                <Picker.Item
                  label={unitType.singular}
                  value={unitType.abbr}
                  key={unitType.abbr}
                />
              ))}
            </Picker>
          </View>
          <Text>
            unitType: {this.state.unitType}
            {"\n"}
            unitFromSelected: {this.state.unitFromSelected}
            {"\n"}
            unitToSelected: {this.state.unitToSelected}
            {"\n"}
            {/* unitsFrom: {this.state.unitsFrom}{"\n"}
          unitsTo: {this.state.unitsTo}{"\n"} */}
            unitFromInput: {this.state.unitFromInput}
            {"\n"}
            unitToInput: {this.state.unitToInput}
            {"\n"}
          </Text>
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
