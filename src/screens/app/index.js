import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AntDesignIcon from "@expo/vector-icons/AntDesign";
import { Text, View } from "react-native";

import TabOneStack from "./tab1";
import TabTwoStack from "./tab2";

const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: "#FFF",
          height: 65,
        },
      }}
    >
      <Tab.Screen
        name="TabOneStack"
        component={TabOneStack}
        options={{
          tabBarActiveBackgroundColor: "#000",
          tabBarLabel: "الرئيسية",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                top: 0,
              }}
            >
              <AntDesignIcon
                name="home"
                color={focused ? "#E57507" : "gray"}
                size={size}
              />
              <Text
                style={{
                  color: focused ? "#E57507" : "gray",
                  fontFamily: focused ? "tajawalBold" : "tajawalRegular",
                }}
              >
                الرئيسية
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TabTwoStack"
        component={TabTwoStack}
        options={{
          tabBarLabel: "من نحن؟",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                top: 0,
              }}
            >
              <AntDesignIcon
                name="gift"
                color={focused ? "#E57507" : "gray"}
                size={size}
              />
              <Text
                style={{
                  color: focused ? "#E57507" : "gray",
                  fontFamily: focused ? "tajawalBold" : "tajawalRegular",
                }}
              >
                من نحن
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default AppStack;
