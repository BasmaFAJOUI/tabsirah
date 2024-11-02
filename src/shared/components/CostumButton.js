import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";

export default function CostumButton(props) {
  const [loaded] = useFonts({
    Tajawal: require("../../../assets/fonts/Tajawal-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: props.color ? props.color : "#1F6F78",
          width: props.width,
          height: props.height ? props.height : 55,
        },
      ]}
      onPress={props.onPress}
    >
      {props.loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text
          style={[
            styles.textStyle,
            {
              color: props.text_color ? props.text_color : "#FFFFFF",
              fontSize: props.fontSize ? props.fontSize : 15,
            },
          ]}
        >
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 5,
    width: 10,
    height: 55,
    marginTop: 1,
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "#323F4B",
  },
  textStyle: {
    fontFamily: "Tajawal",
  },
});
