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
    this.getUnitFromType = this.getUnitFromType.bind(this);
    this.getUnitToInput = this.getUnitToInput.bind(this);
    this.getUnitToType = this.getUnitToType.bind(this);
    this.convertUnits = this.convertUnits.bind(this);
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

  changeUnitType(itemValue) {
    this.setState(
      {
        unitFromSelected: convert().list(itemValue)[0].abbr,
        unitToSelected: convert().list(itemValue)[1].abbr
      },
      () => {
        this.setState(
          {
            unitType: itemValue,
            // unitFromSelected: convert().list(itemValue)[0].abbr,
            // unitToSelected: convert().list(itemValue)[1].abbr,
            unitsFrom: convert().list(itemValue),
            unitsTo: convert().list(itemValue),
            unitFromInput: 1,
            unitToInput: 0
          },
          () => this.convertUnits()
        );
      }
    );
  }

  getUnitFromInput(itemValue) {
    let unitFromInput = itemValue;

    if (itemValue.length === 0) {
      unitFromInput = 0;
    } else {
      unitFromInput = parseFloat(itemValue);
    }

    this.setState(
      {
        unitFromInput: unitFromInput
      },
      () => this.convertUnits()
    );
  }

  getUnitFromType(itemValue) {
    this.setState(
      {
        unitFromSelected: itemValue
      },
      () => this.convertUnits()
    );
  }

  getUnitToInput(itemValue) {
    let unitToInput = itemValue;

    if (itemValue.length === 0) {
      unitToInput = 0;
    } else {
      unitToInput = parseFloat(itemValue);
    }

    this.setState({
      unitToInput: unitToInput
    });
  }

  getUnitToType(itemValue) {
    this.setState({
      unitToSelected: itemValue
    });
  }

  convertUnits() {
    const unitToValue = convert(this.state.unitFromInput)
      .from(this.state.unitFromSelected)
      .to(this.state.unitToSelected);

    this.setState({
      unitToInput: String(unitToValue)
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
              onValueChange={itemValue => this.changeUnitType(itemValue)}
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
                flex: 0.4,
                height: 48,
                borderWidth: 1,
                padding: 8,
                textAlign: "right"
              }}
              defaultValue="1"
              keyboardType="numeric"
              onChangeText={itemValue => this.getUnitFromInput(itemValue)}
              value={String(this.state.unitFromInput)}
            />
            <Picker
              selectedValue={this.state.unitFromSelected}
              style={{ height: 48, flex: 0.6, borderWidth: 1 }}
              onValueChange={itemValue => this.getUnitFromType(itemValue)}
              // value={this.state.unitFromSelected}
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
                flex: 0.4,
                height: 48,
                borderWidth: 1,
                padding: 8,
                textAlign: "right"
              }}
              keyboardType="numeric"
              onChangeText={itemValue => this.getUnitToInput(itemValue)}
              value={String(this.state.unitToInput)}
            />
            <Picker
              selectedValue={this.state.unitToSelected}
              style={{ height: 48, flex: 0.6, borderWidth: 1 }}
              onValueChange={itemValue => this.getUnitToType(itemValue)}
              // Value={this.state.unitToSelected}
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
