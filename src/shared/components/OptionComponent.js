import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import AntDesignIcon from "@expo/vector-icons/AntDesign";

export default function OptionComponent(props) {
  return (
    <TouchableOpacity style={styles.option} onPress={props.action}>
      <Text style={styles.option_title}>{props.title}</Text>
      <AntDesignIcon size={20} name="left" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  option: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
  },
  option_title: {
    fontWeight: "bold",
    color: "#323F4B",
  },
});
