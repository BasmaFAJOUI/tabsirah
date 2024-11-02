import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Loading from "./LoadingScreen";
import OnboardingStack from "./screens/onboarding";
import AppStack from "./screens/app";

const Stack = createStackNavigator();

import { useFonts } from "expo-font";

function MyNavigator() {
  const [loaded] = useFonts({
    tajawalRegular: require("../assets/fonts/Tajawal-Regular.ttf"),
    tajawalBold: require("../assets/fonts/Tajawal-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyNavigator;
