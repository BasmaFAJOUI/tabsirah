import { useFonts } from "expo-font";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function SkipButton(props) {
  const [loaded] = useFonts({
    tajawalBold: require("../../../../assets/fonts/Tajawal-Bold.ttf"),
    tajawal: require("../../../../assets/fonts/Tajawal-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const { navigation } = props;

  const goToFinalScreen = () => {
    navigation.navigate("FourthScreen");
  };

  return props.visible ? (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: props.transparent,
          },
        ]}
        onPress={() => goToFinalScreen()}
      >
        <Text
          style={[
            styles.text,
            {
              backgroundColor: props.color,
            },
          ]}
        >
          تخطي
        </Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.keepSameHeight}></View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 20,
    backgroundColor: "#87CEEB66",
    borderRadius: 20,
    width: 100,
  },
  text: {
    fontFamily: "tajawal",
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 5,
    backgroundColor: "#87CEEB",
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
    borderRadius: 15,
  },
  keepSameHeight: {
    flex: 1,
    backgroundColor: "#FFF",
    height: 30,
  },
});

export default SkipButton;
