import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import CostumButton from "../components/CostumButton";
import { Overlay } from "react-native-elements";

export default function SuccessPopup(props) {
  return (
    <Overlay overlayStyle={styles.container} isVisible={props.visible}>
      <View style={styles.inside_container}>
        <View style={styles.image_container}>
          <Image
            source={require("../../../assets/check.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.text_container}>
          <Text>{props.text}</Text>
        </View>
        <View style={styles.button_container}>
          <CostumButton width="70%" title="تابع" onPress={props.action} />
        </View>
      </View>
    </Overlay>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: 250,
    backgroundColor: "#F3F0EB",
  },
  image_container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button_container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "95%",
  },
  inside_container: {
    width: "100%",
    height: "100%",
  },
});
