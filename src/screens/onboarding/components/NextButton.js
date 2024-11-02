import { CommonActions } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

function NextButton(props) {
  const goToNextScreen = (nextScreen) => {
    if (nextScreen === "Login") {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: "AuthenticationStack" }],
        })
      );
    } else {
      props.navigation.navigate(nextScreen);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 5,
      }}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => goToNextScreen(props.nextScreen)}
      >
        {/* <Text style={styles.text}>G</Text> */}
        <Image
          style={styles.image}
          resizeMode="contain"
          source={props.nextImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#FFF",
    fontSize: 24,
    paddingTop: 30,
    textAlign: "center",
  },
  image: {
    height: 85,
    width: 85,
  },
  keepSameHeight: {
    backgroundColor: "#FFF",
    height: 30,
  },
});

export default NextButton;
