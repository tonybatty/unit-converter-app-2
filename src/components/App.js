import React from "react";
import Converter from "./Converter";
import convert from "convert-units";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.unitFromValue = "";

    this.state = {
      unitCategoryArr: convert().measures(),
      fromUnitsArr: convert().list("length"),
      toUnitsArr: convert().list("length"),
      unitCategory: "length",
      fromUnitValue: "1",
      fromUnit: "mm",
      toUnitValue: "",
      toUnit: "cm"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, name) {
    const newState = { ...this.state };
    newState[name] = value;
    newState.toUnitValue = convert(parseFloat(newState.fromUnitValue)).from(newState.fromUnit).to(newState.toUnit);
    this.setState(newState);
  }

  render() {
    return (
      <Converter
        unitCategoryArr={this.state.unitCategoryArr}
        fromUnitsArr={this.state.fromUnitsArr}
        toUnitsArr={this.state.toUnitsArr}
        unitCategory={this.state.unitCategory}
        fromUnitValue={this.state.fromUnitValue}
        fromUnit={this.state.fromUnit}
        toUnitValue={this.state.toUnitValue}
        toUnit={this.state.toUnit}
        handleChange={this.handleChange}
      />
    );
  }
}
