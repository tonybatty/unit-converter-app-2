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
      toUnitValue: "0",
      toUnit: "cm"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, name, convertFrom) {
    let newState = { ...this.state };

    if (name === "unitCategory" && value !== newState.unitCategory) {
      newState = {
        fromUnitsArr: convert().list(value),
        toUnitsArr: convert().list(value),
        unitCategory: value,
        fromUnitValue: "1",
        fromUnit: convert().list(value)[0].abbr,
        toUnitValue: "0",
        toUnit: convert().list(value)[1].abbr
      };
    } else {
      newState[name] = value;
      
      if (convertFrom === true) {
        newState.toUnitValue = String(
          convert(parseFloat(newState.fromUnitValue))
            .from(newState.fromUnit)
            .to(newState.toUnit)
        );
      } else if (convertFrom === false){
        newState.fromUnitValue = String(
          convert(parseFloat(newState.toUnitValue))
            .from(newState.toUnit)
            .to(newState.fromUnit)
        );
      }
    }


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
