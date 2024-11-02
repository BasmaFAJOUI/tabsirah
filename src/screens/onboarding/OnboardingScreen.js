import { useFonts } from "expo-font";
import React from "react";

import { View } from "react-native";
import NextButton from "./components/NextButton";
import OnboardingContent from "./components/OnboardingContent";
import SkipButton from "./components/SkipButton";

const OnboardingScreen = ({ route, navigation }) => {
  const {
    index,
    visible,
    onboardingImage,
    nextImage,
    onboardingText,
    baseColor,
    secondColor,
    nextScreen,
  } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ flex: 1 }}>
        <SkipButton
          visible={visible}
          color={baseColor}
          transparent={secondColor}
          finalScreen="FourthScreen"
          navigation={navigation}
        />
      </View>
      <View style={{ flex: 5 }}>
        <OnboardingContent
          onboardingImage={onboardingImage}
          onboardingText={onboardingText}
          screenIndex={index}
        />
      </View>
      <View style={{ flex: 2 }}>
        <NextButton
          nextImage={nextImage}
          nextScreen={nextScreen}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;
