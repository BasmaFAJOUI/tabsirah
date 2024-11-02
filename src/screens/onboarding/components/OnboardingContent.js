import { useFonts } from "expo-font";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function OnboardingContent({ onboardingImage, onboardingText, screenIndex }) {
  const [loaded] = useFonts({
    tajawalBold: require("../../../../assets/fonts/Tajawal-Bold.ttf"),
    tajawal: require("../../../../assets/fonts/Tajawal-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const numberOfScreens = 4;
  console.log(onboardingImage);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 90,
      }}
    >
      <Image style={styles.image} resizeMode="cover" source={onboardingImage} />
      <Text style={styles.onboardingText}>{onboardingText}</Text>
      <Text style={styles.progressText}>
        {screenIndex}/{numberOfScreens}
      </Text>
    </View>
  );
}
//how can i have a rounded button?

const styles = StyleSheet.create({
  image: {
    width: 270,
    height: 250,
  },
  onboardingText: {
    fontFamily: "tajawalBold",
    width: 270,
    fontSize: 20,
    lineHeight: 40,
    textAlign: "center",
  },
  progressText: {
    fontFamily: "tajawal",
    fontSize: 18,
    fontWeight: "normal",
  },
});

export default OnboardingContent;
