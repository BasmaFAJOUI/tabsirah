import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import ArticleScreen from "./ArticleScreen";

import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const TabOneStack = () => {
  const [loaded] = useFonts({
    tajawalRegular: require("../../../../assets/fonts/Tajawal-Regular.ttf"),
    tajawalBold: require("../../../../assets/fonts/Tajawal-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        initialParams={{ showButton: false }}
        options={{
          headerBackVisible: false,
          title: "الرئيسية",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTintColor: "#E57507",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "tajawalBold",
          },
        }}
      />
      <Stack.Screen
        name="ArticleScreen"
        component={ArticleScreen}
        options={{
          headerBackVisible: false,
          title: "معلومات عن النشاط",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTintColor: "#1F6F78",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "tajawalBold",
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default TabOneStack;
