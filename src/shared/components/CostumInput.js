import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

export default function CostumInput(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      {props.area ? (
        <TextInput
          selectionColor={"#1F6F7877"}
          defaultValue={props.default}
          onChangeText={props.onChange}
          style={[styles.input1, { width: props.width }]}
          multiline={true}
          placeholder="***********"
        />
      ) : (
        <TextInput
          selectionColor={"#1F6F7877"}
          defaultValue={props.default}
          onChangeText={props.onChange}
          style={[styles.input, { width: props.width }]}
          placeholder="**********"
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    borderColor: "#7B8794",
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 10,
    textAlign: "center",
    height: 40,
    fontSize: 12,
  },
  input1: {
    borderColor: "#7B8794",
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 10,
    textAlign: "center",
    height: 100,
    fontSize: 12,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
