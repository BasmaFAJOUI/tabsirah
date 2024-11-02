import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CqInfoScreen from "./CqInfoScreen";
import AboutApp from "./AboutApp";
const Stack = createStackNavigator();

function TabTwoStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="CqInfoScreen"
    >
      <Stack.Screen
        name="CqInfoScreen"
        component={CqInfoScreen}
        options={{
          headerBackVisible: false,
          title: "من نحن؟",
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
        name="AboutApp"
        component={AboutApp}
        options={{
          headerBackVisible: false,
          title: "عن دار الخير",
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
}
export default TabTwoStack;
