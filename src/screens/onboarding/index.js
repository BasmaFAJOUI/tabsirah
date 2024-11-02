import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "./OnboardingScreen";

const Stack = createStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FirstScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="FirstScreen"
        component={OnboardingScreen}
        initialParams={{
          index: 1,
          visible: true,
          onboardingImage: require("./assets/darlkhir.png"),
          nextImage: require("./assets/start.png"),
          onboardingText: "مرحبا بك، يسعدنا أن تكون جزءًا من تطبيق دار الخير.",
          baseColor: "#41bebe",
          secondColor: "#78d1d1",
          nextScreen: "SecondScreen",
        }}
      />
      <Stack.Screen
        name="SecondScreen"
        component={OnboardingScreen}
        initialParams={{
          index: 2,
          visible: true,
          onboardingImage: require("./assets/2.png"),
          nextImage: require("./assets/pass_2.png"),
          onboardingText: "إنضم إلى فريق المتطوعين وشارك في بناء مجتمع أفضل",
          baseColor: "#57bee9",
          secondColor: "#87d1f0",
          nextScreen: "ThirdScreen",
        }}
      />
      <Stack.Screen
        name="ThirdScreen"
        component={OnboardingScreen}
        initialParams={{
          index: 3,
          visible: true,
          onboardingImage: require("./assets/3.png"),
          nextImage: require("./assets/pass_3.png"),
          onboardingText: "تعرف على الجهات الخيرية بمنطقتك وقدم الدعم",
          baseColor: "#c341fd",
          secondColor: "#d478fd",
          nextScreen: "FourthScreen",
        }}
      />
      <Stack.Screen
        name="FourthScreen"
        component={OnboardingScreen}
        initialParams={{
          index: 4,
          visible: false,
          onboardingImage: require("./assets/1.png"),
          nextImage: require("./assets/pass_1.png"),
          onboardingText: "ساهم سواء بوقتك أو مالك لتحسين حياة الآخرين",
          baseColor: "#ff7499",
          secondColor: "#ffb6c9",
          nextScreen: "Login",
        }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
