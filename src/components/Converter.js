import React from "react";
import { StyleSheet, Text, TextInput, Picker, View } from "react-native";

function Converter({
  unitCategoryArr,
  fromUnitsArr,
  toUnitsArr,
  unitCategory,
  fromUnitValue,
  fromUnit,
  toUnitValue,
  toUnit,
  handleChange
}) {
  return (
    <View style={styles.container}>
      <View style={styles.elementsContainer}>
        <View style={styles.inputGroup}>
          <Picker
            selectedValue={unitCategory}
            style={{ height: 50, flex: 1, borderWidth: 1 }}
            onValueChange={value => handleChange(value, "unitCategory")}
          >
            {unitCategoryArr.map(unitType => (
              <Picker.Item label={unitType} value={unitType} key={unitType} />
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
            onChangeText={value => handleChange(value, "fromUnitValue")}
            value={String(fromUnitValue)}
          />
          <Picker
            selectedValue={fromUnit}
            style={{ height: 48, flex: 0.6, borderWidth: 1 }}
            onValueChange={value => handleChange(value, "fromUnit")}
          >
            {fromUnitsArr.map(unitType => (
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
            value={String(toUnitValue)}
            onChangeText={value => handleChange(value, "toUnitValue")}
          />
          <Picker
            selectedValue={toUnit}
            style={{ height: 48, flex: 0.6, borderWidth: 1 }}
            onValueChange={value => handleChange(value, "toUnit")}
          >
            {toUnitsArr.map(unitType => (
              <Picker.Item
                label={unitType.singular}
                value={unitType.abbr}
                key={unitType.abbr}
              />
            ))}
          </Picker>
        </View>
        <Text>
          unitCategory: {unitCategory}
          {"\n"}
          fromUnit: {fromUnit}
          {"\n"}
          fromUnitValue: {fromUnitValue}
          {"\n"}
          toUnit: {toUnit}
          {"\n"}
          toUnitValue: {toUnitValue}
          {"\n"}
        </Text>
      </View>
    </View>
  );
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

export default Converter;
