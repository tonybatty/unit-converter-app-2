import React from "react";
import convert from "convert-units";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.unitFromValue = "";
    this.unitConverter = {
      unitFromValue: "1"
    }
    
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

    this.unitConverter.unitFromValue = unitFromInput;

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
      <Converter />
    );
  }
}